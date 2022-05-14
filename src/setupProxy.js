const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "https://qlyrjvzj80.execute-api.ap-northeast-2.amazonaws.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
