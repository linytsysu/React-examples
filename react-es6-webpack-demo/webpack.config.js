var path = require('path');
var webpack = require('webpack');

var node_modules = path.resolve(__dirname, './node_modules');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './components/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
    entry: [APP_PATH],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react']
        }, {
            test: /\.less/,
            loader: 'style!css!less'
        }]
    }
}