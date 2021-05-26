const { merge } = require('webpack-merge')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new CssMinimizerWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash].[name].css',
        }),
        new WebpackManifestPlugin(),
    ],
    optimization: {
        splitChunks: { chunks: 'all' },
    },
})
