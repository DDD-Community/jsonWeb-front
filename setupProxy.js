const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      // target: process.env.REACT_APP_API,
      target: 'https://exitnow.link',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    })
  );
};
