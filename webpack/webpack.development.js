const path = require('path')

const { merge } = require('webpack-merge')
const { ProgressPlugin, HotModuleReplacementPlugin } = require('webpack')

const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'build'),
        hot: true,
        liveReload: false,
        open: true,
        port: 3000,
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [new HotModuleReplacementPlugin(), new ProgressPlugin()],
})
