/**
 * Created by eljaiek on 6/29/17.
 */
'use strict';

import WebpackConfig from "webpack-config";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const SERVER_PORT = 3000;
const SERVER_URL = `http://localhost:${SERVER_PORT}/`;

export default new WebpackConfig().extend('./config/webpack.base.config.js').merge({

    devtool: 'eval-source-map',

    output: {
        publicPath: SERVER_URL
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html.ejs',
            inject: 'body',
            chunksSortMode: (entry1, entry2) => {
                return 1;
            },
            baseHref: SERVER_URL,
            env: 'dev'
        }),
    ],

    devServer: {
        contentBase: __dirname + '/dist',
        port: SERVER_PORT,
        inline: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 500
        }
    }
});
