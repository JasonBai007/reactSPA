var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        pages: __dirname +'/app/src/main.jsx',
        vendors:['react','react-dom','react-router','reflux','antd']  //第三方库和框架
    },
    output: {
        path: __dirname + '/app/dist',
        publicPath:'dist/',  //事实上，这个配置直接影响了图片的输出路径
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }, //坑：不能用叹号链接，必须写成这种格式
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader') },
            { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
        new ExtractTextPlugin("bundle.css"),
        // jquery配置
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
        // 压缩配置
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
