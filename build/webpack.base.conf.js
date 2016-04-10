var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
// var zepto = require('../node_modules/zepto/zepto.min.js')
module.exports = {
  entry: {
    app: './src/main.js'
    // zepto: 'http://g.alicdn.com/sj/lib/zepto/zepto.min.js',
    // sm: 'http://g.alicdn.com/msui/sm/0.6.2/js/sm.min.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  plugins: {
    // new zepto
  },
  // externals: {
  //   'zepto': require('../node_modules/zepto/zepto.min.js')
    // 'sm': 'http://g.alicdn.com/msui/sm/0.6.2/js/sm.min.js'
  // },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
