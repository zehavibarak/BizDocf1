const { env } = require('process');

const target = /*env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] :*/ 'https://localhost:7162';

const PROXY_CONFIG = {
  '/api/**': {
    target,
    secure: false
  },
  '/chub': {
    target,
    ws: true
  }
}

module.exports = PROXY_CONFIG;
