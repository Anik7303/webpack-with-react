const path = require('path')

const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlConfig = {
    favicon: './public/favicon.ico',
    inject: 'body',
    meta: { viewport: 'width=device-width,initial-scale=1.0' },
    template: './public/index.html',
}

const webpackConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(htmlConfig),
    ],
}

module.exports = webpackConfig
