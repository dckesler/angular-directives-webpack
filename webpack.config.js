var webpack = require('webpack');
module.exports = {
    entry: [
        './Angular/app.js'
    ],

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.css$/, loader: "style!css", exclude: [/node_modules/]},
            { test: /\.scss$/, loader: "style!css!sass", exclude: [/node_modules/] },
            { test: /\.html$/, loader: "html-loader", exclude: [/node_modules/] }
        ]
    }
};