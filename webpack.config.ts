import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], /* MiniCssExtractPlugin вместо style-loader для продакшена */
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'cascad',
      template: path.resolve(__dirname, './src/pages/cascad/index.html'), // шаблон
      filename: 'cascad.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'relative-values',
      template: path.resolve(__dirname, './src/pages/relative-values/index.html'), // шаблон
      filename: 'relative-values.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'relative-values-part2',
      template: path.resolve(__dirname, './src/pages/relative-values-part2/index.html'), // шаблон
      filename: 'relative-values-part2.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'css-variables',
      template: path.resolve(__dirname, './src/pages/css-variables/index.html'), // шаблон
      filename: 'css-variables.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'block-model',
      template: path.resolve(__dirname, './src/pages/block-model/index.html'), // шаблон
      filename: 'block-model.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'floating-elements',
      template: path.resolve(__dirname, './src/pages/floating-elements/index.html'), // шаблон
      filename: 'floating-elements.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'flex-box',
      template: path.resolve(__dirname, './src/pages/flex-box/index.html'), // шаблон
      filename: 'flex-box.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'grids-simple',
      template: path.resolve(__dirname, './src/pages/grids-simple/index.html'), // шаблон
      filename: 'grids-simple.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'grids-page',
      template: path.resolve(__dirname, './src/pages/grids-page/index.html'), // шаблон
      filename: 'grids-page.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'grids-page-portfolio',
      template: path.resolve(__dirname, './src/pages/grids-page-portfolio/index.html'), // шаблон
      filename: 'grids-page-portfolio.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'top-banner',
      template: path.resolve(__dirname, './src/pages/top-banner/index.html'), // шаблон
      filename: 'top-banner.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'empty',
      template: path.resolve(__dirname, './src/pages/empty/index.html'), // шаблон
      filename: 'empty.html', // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
