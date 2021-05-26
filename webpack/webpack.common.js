const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: '[contenthash].bundle.js',
        chunkFilename: '[contenthash].[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /.(jpg|jpeg|png|gif|svg)$/i,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: 'head',
            favicon: './public/favicon.ico',
            meta: { viewport: 'width=device-width,initial-scale=1.0' },
            template: './public/index.html',
        }),
    ],
}
