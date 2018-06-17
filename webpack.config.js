let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "main.js",
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: [
                        'css-loader',
                        'sass-loader'
                    ] 
                })
                /*use: [
                    'style-loader',
                    'css-loader'
                ]*/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./src/fonts/ofont.ru_Georgia.ttf'
                    },
                    {
                        loader: 'file-loader?name=./src/fonts/ofont.ru_Georgia.ttf'
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}