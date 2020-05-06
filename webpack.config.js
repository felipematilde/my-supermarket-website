module.exports = [{
    entry: './src/main.js',
    output: {
        path: __dirname+'/public',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    }
},{
    entry: './src/admin.js',
    output: {
        path: __dirname+'/public',
        filename: 'bundleAdmin.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    }
}]