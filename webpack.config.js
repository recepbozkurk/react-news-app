const path = require('path');

//Webpack ile birden fazla dosyayı tek bir dosya halinde birleştirebiliriz.
//entry kısmına birleştirilecek dosyalar, output'a ise çıktı bilgileri girilir.
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", 'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ]
    }     
}