const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/build')
    },
    mode: 'production',
    module: {
        rules: [
            { 
                test: /\.js[x]?$/, 
                use: 'babel-loader',
                exclude: [
                    '/node_modules',
                    '/build'
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ],
                exclude: [
                    '/node_modules',
                    '/build'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            {
                from: './public/',
                to: './',
                toType: 'dir',
                ignore: ['bundle.js']
            }
        ])
    ]
};

// loader - used to transform files
