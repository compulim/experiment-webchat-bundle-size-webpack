const { join } = require('path');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: join(__dirname, 'src/index.js'),
  output: {
    filename: 'assets/bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }]
    }),
    new StatsWriterPlugin({
      filename: 'stats.json',
      transform: (_, opts) => JSON.stringify(opts.compiler.getStats().toJson({ chunkModules: true }), null, 2)
    })
  ]
};

if ((process.env.node_env || process.env.NODE_ENV) === 'production') {
  module.exports = {
    ...module.exports,
    mode: 'production'
  };
}
