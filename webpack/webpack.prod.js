const { merge } = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin()]
    }
})
