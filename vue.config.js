const apiUrl = "https://47.99.103.115/";
const getEntries = require("./script/getEntries");
const pages = getEntries();
const publicPath = process.env.PUBLIC_URL || "./";
const proxyTarget = process.env.PROXY_URL || apiUrl;
module.exports = {
  publicPath,
  pages,
  runtimeCompiler: process.env.NODE_ENV === "development",
  devServer: {
    // allowedHosts: ['.ipalfish.com'],
    proxy: {
      "/klian": {
        target: proxyTarget,
        ws: true,
        changeOrigin: true,
        secure: false,
      },
      "/stat": {
        target: proxyTarget,
      },
      "/pfapi": {
        target: proxyTarget,
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 40, // 设计稿 750
            propList: ["*"],
            exclude: /node_modules/i,
          }),
        ],
      },
    },
  },
};
