const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: 'main.css',
        }),
        new HtmlWebpackPlugin({
            title: 'amoCRM layout test',
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        open: true,
        compress: true,
        port: 9000,
        hot: true
    },
};