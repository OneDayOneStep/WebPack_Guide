const path = require("path"); //用于解析路径
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //用于清理dist目录

module.exports = {
    plugins: [
        // new CleanWebpackPlugin(), //在打包生成之前清理dist目录
        new HtmlWebpackPlugin({ //将会生产一个新的.html文件 如果不指定filename默认为index.html
            title:  'WP Learning',
            filename: 'Webpack.html'
        })
    ],
    // entry: './src/index.js', //用于打包的入口文件
    entry: {
        diyName: "./src/index.js",
        print: "./src/print.js"
    },
    output: {
        // filename: 'main.js', // 打包生成的文件名
        // filename: 'bundle.js',
        filename: '[name].bundle.js', //这里的[name]是entry里对应js文件的键名
        // path: path.resolve(__dirname, 'dist') //解析路径
        path: "/" //解析路径
    },

    mode: "development", //设置打包模式为开发
    devtool: "inline-source-map", //不要在生产环境中使用
    // 使用 devtool - inline-source-map 打包后如产生报错将会在错误信息中显示对应的 js 文件 - 行号
    devServer: {
        //设置 devServer 监听的路径
        //注意：不要和plugins - CleanWebpackPlugin同时使用
        contentBase: "./dist",
        openPage: 'Webpack.html'
    },
    module: {
        rules: [{
            test: /\.css$/, // 查找css文件 //可用sass/less
            use: ["style-loader", "css-loader"]
        },{
            test: /\.(png|svg|jpg|gif)$/, // 查找图片文件
            use: ["file-loader"]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/, // 查找字体文件
            use: ["file-loader"]
        },{
            test: /\.xml$/, // 查找xml文件
            use: ["xml-loader"]
        }]
    }
};