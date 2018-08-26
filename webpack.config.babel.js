const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: [
            './src/index/index.js',
            './src/pricing/pricing.js',
            './src/features/features.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build/dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
                use: [
                    "babel-loader",
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        },
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        },
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {test: /\.hbs/, loader: "handlebars-loader"}
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
        new HtmlWebpackPlugin({
            title: 'Features',
            filename: 'features.html',
            template: './src/features/features.hbs'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
};
