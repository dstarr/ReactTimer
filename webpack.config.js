const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const dist = path.join(__dirname, 'dist');

module.exports = {

    entry: path.join(__dirname, 'components', 'App.js'),

    output: {
        path: dist,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            },

            // Used for Bootstrap Less Source Files
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            // Used for Bootstrap CSS Source Files
            {
                test: /\.css/,
                loader: 'style!css'
            },
            // Used for Bootstrap Glyphicon Fonts
            {
                test: /\.(woff2|woff|ttf|svg|eot)$/,
                loader: 'file'
            }
        ]
    },

    // resolve: {
    //     // the folders where webpack will look for modules and JS code to bundle should
    //     // it be imported into the application
    //     modulesDirectories: [
    //         'components', 'node_modules'
    //     ],
    //     extensions: ['', '.json', '.js']
    // }
};