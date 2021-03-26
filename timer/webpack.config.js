const path = require('path');
const htmlWpPlug = require("html-webpack-plugin"); //html插件包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// TODO: 部份注入待实现
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,//loader取代style.loader,作用，提取js中的css文件
                    'css-loader'

                ],
            }
        ]
    },
    plugins: [
        new htmlWpPlug({
            filename: '../dist/index.html',  //   相对于out文件夹的路径
            template: "./src/index.html",
            // chunks: 'all',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            inject: 'head',
        }),
        new MiniCssExtractPlugin({
            filename: './style.bundle.css', //   相对于out文件夹的路径
        }),

    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, //是否启用gzip压缩
        port: 8821,
        hot: true,
    },
};