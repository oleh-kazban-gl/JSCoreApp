const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          include: [path.resolve(__dirname, '**/*.js')],
          loader: 'eslint-loader',
          exclude: '/node_modules/',
          options: {
            emitWarning: true,
            configFile: './.eslintrc.json',
          },
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'main.js'),
            path.resolve(__dirname, '**/*.js'),
          ],
          loader: 'babel-loader',
          exclude: '/node_modules/',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },
    performance: {
      hints: false,
    },
    devServer: {
      port: 3000,
    },
    devtool: isProduction ? false : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [new CleanWebpackPlugin()],
  };
};
