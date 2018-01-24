/**
 * Created by eljaiek on 6/29/17.
 */

'use strict';

import WebpackConfig from "webpack-config";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default new WebpackConfig().extend('./config/webpack.base.config.js').merge({

    devtool: 'source-map',

    output: {
        publicPath: ''
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.html.ejs',
            inject: 'body',
            chunksSortMode: (entry1, entry2) => {
                return 1;
            },
            baseHref: '/'
        })
    ]
})