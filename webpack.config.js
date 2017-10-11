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
                loader: "babel-loader",
                query: {compact: false}
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
    }
};