const path = require('path');
module.exports = {
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, './webhtml'),
    historyApiFallback: true,
    host:'0.0.0.0',
    proxy:{
      "/wxwap/wxfx_api": {
        target: "http://127.0.0.1:3000",
        pathRewrite: {"^/wxwap" : ""}
      }
    },
    quiet: true
  }
};