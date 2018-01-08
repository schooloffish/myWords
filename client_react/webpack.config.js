var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: { 'app_react': './main.js','vendor_react':'./vendor.js' },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'react'], plugins: ['transform-decorators-legacy', 'transform-class-properties'] }
            },
            {
                test: /\.css$/,
                // exclude: path.join(__dirname, 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[id].chunk.js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourceMap: false }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app_react','vendor_react']
        }),
        new HtmlWebpackPlugin({ template: './index.html',filename:'index_react.html' })
    ]
};