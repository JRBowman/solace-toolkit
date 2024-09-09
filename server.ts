import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';

import * as httpProxy from 'http-proxy-middleware';
import { environment } from 'src/environments/environment';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {

  const server = express();
  const distFolder = join(process.cwd(), 'dist/onbowman-13/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  const apiProxy = httpProxy.createProxyMiddleware('/api', {
    target: process.env['BACKEND_SERVICE_HOST'] || environment.apiHost,
    changeOrigin: true,
    xfwd: true,
    secure: false,
  });

  const artifactProxy = httpProxy.createProxyMiddleware('/Artifacts', {
    target: process.env['BACKEND_SERVICE_HOST'] || environment.apiHost,
    changeOrigin: true,
    xfwd: true,
    secure: false,
  });


  server.use('/api', apiProxy);
  server.use('/Artifacts', artifactProxy);

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  server.get("/serviceenvironment", (req, res) => {
    let envData: any = {};
    envData.apiHost = process.env['BACKEND_SERVICE_HOST'];
    envData.identityHost = process.env['IDENTITY_SERVICE_HOST'];
    res.send()
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 8080;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
