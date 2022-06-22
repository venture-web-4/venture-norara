const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://opendict.korean.go.kr/api',
      changeOrigin: true,
    })
  );
};
