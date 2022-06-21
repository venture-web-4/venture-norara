// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/search', {
      target: 'https://opendict.korean.go.kr/api/search',
      changeOrigin: true,
    })
  );
};
