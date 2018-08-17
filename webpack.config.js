const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.js[x]?$/, 
                use: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ],
                // use: 'babel-loader',
                exclude: '/node_modules'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};

// loader - used to transform files
