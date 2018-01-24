'use strict';

import path from "path";
import webpack from "webpack";
import WebpackConfig from "webpack-config";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const SRC_FOLDER = path.resolve(__dirname, '../src');
const BUILD_FOLDER = path.resolve(__dirname, '../dist');
const APP_ENTRY = 'main';
const VENDOR_ENTRY = 'vendor';

export default new WebpackConfig().merge({

    context: SRC_FOLDER,

    entry: {
        'vendor': './vendor.js',
        'app': './main.js'
    },

    output: {
        path: BUILD_FOLDER,
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin({filename: '[name].bundle.css', allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({
            name: [APP_ENTRY, VENDOR_ENTRY],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            "window.jQuery": "jquery",
            "$": "jquery",
            "jQuery": "jquery"
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'ng-annotate-loader', options: {es6: true}},
                    {loader: 'babel-loader', query: {presets: ['env']}}],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader'}
                    ],
                })
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader?name=assets/images/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }
})