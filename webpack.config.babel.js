const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index/index.js',
        pricing: './src/pricing/pricing.js',
    },
    output: {
        path: __dirname + '/build/dist',
    },    module: {
        rules: [
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
                        loader: MiniCssExtractPlugin.loader,
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
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
};
