require('dotenv').config();
const transpile = require('next-transpile-modules');
const headers = require('./headers');

const withTranspile = transpile(['echess']);
module.exports = withTranspile({
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    APP_BASE_URL: process.env.APP_BASE_URL,
    APP_NAME: process.env.APP_NAME,
    COOKIE: process.env.COOKIE,
    LOG_EVERYWHERE: process.env.LOG_EVERYWHERE,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    STOCKFISH_PATH: process.env.STOCKFISH_PATH,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
});
