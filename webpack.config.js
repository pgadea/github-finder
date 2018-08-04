module.exports = {
    entry: ['./src/index.js'], output: { path: __dirname + '/build', filename: 'bundle.js' },
    mode: "development",

    devServer: {
        contentBase: "./dist"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ loader: "babel-loader" }],
                exclude: /node_modules/
            }
        ]
    }
};