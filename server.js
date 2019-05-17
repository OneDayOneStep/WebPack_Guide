const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const opn = require("opn");

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath // config 取到的就是 webpack.config.js
}));

// 将文件 serve 到 port 3000
let port = 3000;
let homePage = "/Webpack.html";
app.listen(port, function () {
    console.log('Example app listening on port '+ port +'!\n');
    opn("http://localhost:" + port + homePage ); // 自动打开该页面
});