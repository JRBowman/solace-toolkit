import type { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  apiHost: 'http://solacetk-api:8080',
  identityHost: 'https://identity-svc.onbowman.com',
};
