module.exports = {

    watch: true,

    target: 'electron',

    entry: './app/src/main.js',

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.exec\.js$/,
              use: [ 'script-loader' ]
            }
        ]
    },

    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    }

}
