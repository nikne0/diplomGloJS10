/*
 *** Created by NikNet 08.12.2019
*/


const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'none',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: '/dist'
    }
};
    