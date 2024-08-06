
export { AppServerModule } from './app/app.server.module';

// import 'zone.js/dist/zone-node';
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import express from 'express';
// import { join } from 'path';
// import { APP_BASE_HREF } from '@angular/common';
// import { existsSync } from 'fs';

// // import { AppServerModule } from './src/main.server';
// // import { environment } from './src/environments/environment';
// import * as httpProxy from 'http-proxy-middleware';
// import { environment } from './environments/environment';
// import { AppServerModule } from './app/app.server.module';

// const app = express();
// const distFolder = join(process.cwd(), 'dist/onbowman-13/browser');
// const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

// // Our API proxy middleware
// const apiProxy = httpProxy.createProxyMiddleware('/api', {
//   target: environment.apiHost,
//   changeOrigin: true,
// });

// app.use('/api', apiProxy);

// app.engine('html', ngExpressEngine({
//   bootstrap: AppServerModule,
// }));

// app.set('view engine', 'html');
// app.set('views', distFolder);

// app.get('*.*', express.static(distFolder, {
//   maxAge: '1y'
// }));

// app.get('*', (req, res) => {
//   res.render(indexHtml, { req });
// });

// const port = process.env['PORT'];

// app.listen(port, () => {
//   console.log(`Node Express server listening on http://localhost:${port}`);
// });
