const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    mode: 'development',
    devtool: "source-map",
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
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader", 
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[sha1:hash:hex:4]'
                        }
                    },
                    {
                        loader: "sass-loader", 
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[sha1:hash:hex:4]'
                        }
                    }
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
