const { env } = require('process');

const target = `https://localhost:${7162}`;

const PROXY_CONFIG = [
  {
    context: [
      '/api/**'
    ],
    target,
    secure: false
  },
  {
    context: ['/chub'],
    target,
    ws: true
  }
]

module.exports = PROXY_CONFIG;
