var path = require("path");
const webpack = require('webpack');
module.exports = {
    mode: "production",
    entry: "./src/titleBar.js",
    output: {
        path: path.resolve("build"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    plugins: [
        new webpack.IgnorePlugin(/^pg-native$/),
        new webpack.DefinePlugin({
            'process.env.BROWSER': false,
            __DEV__: process.env.NODE_ENV !== 'production',
        }),
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",

            }
        ]
    },
    externals: {
        react: "react"
    }
};