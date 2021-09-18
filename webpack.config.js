const path = require('path')

module.exports = {
    entry: ['@babel/polifill', path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port:3030
    },
    devtool: 'source-map'
}