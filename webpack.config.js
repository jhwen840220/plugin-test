const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const InlineScriptPlugin = require('./Plugins/inline-script-plugin');
module.exports = {
    mode: 'development',
    entry: { 
        // main: './src/index.js',
        cookie: './src/_cookie.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        }),

        new InlineScriptPlugin({
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js?v=[contenthash]',
    }
}