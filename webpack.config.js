const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '/')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "/")
        },
        open: true
    }
};