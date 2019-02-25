const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: NODE_ENV,
    entry: './48kblocks.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '48kblocks.build.js',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};