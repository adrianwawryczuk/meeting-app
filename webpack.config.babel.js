const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                use: [
                    "html-loader",
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    "babel-loader",
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                exclude: /(node_modules)/,
                use: [
                    "url-loader",
                ]
            },
            { test: /\.hbs/, loader: "handlebars-loader" }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'index.html',
            template: './src/index/index.hbs'
        }),
        new HtmlWebpackPlugin({
            title: 'Pricing',
            filename: 'pricing.html',
            template: './src/pricing/pricing.hbs'
        })
    ],
};
