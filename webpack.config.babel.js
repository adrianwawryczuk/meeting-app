const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/index/index.js', './src/pricing/pricing.js'],
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
        new HtmlWebpackPlugin({
            title: 'Features',
            filename: 'features.html',
            template: './src/features/features.hbs'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
};
