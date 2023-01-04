const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://exitnow.link',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    })
  );
};
