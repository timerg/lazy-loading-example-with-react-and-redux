const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        // publicPath: 'http://[YourDomain.com]/',
        publicPath: '/',
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        host: "localhost",
        contentBase: "./public",
        hot: true,
    },

}


