const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const InlineRawSourcePlugin = require('./Plugins/inline-script-plugin');
module.exports = {
    mode: 'production',
    entry: { 
        main: './src/index.js',
        cookie: './src/_cookie.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader: 'babel-loader'
                    // }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        }),

        new InlineRawSourcePlugin({
            chunkname: ["main", "cookie"],
            // filename: "QQQ.html",
            // path: path.resolve(__dirname, 'QQQ')
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js?v=[contenthash]',
    }
}