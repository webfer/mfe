import { VueLoaderPlugin } from 'vue-loader';

export const entry = './src/index.js';
export const output = {
  filename: '[name].[contenthash].js',
};
export const resolve = {
  extensions: ['.js', '.vue'],
};
export const module = {
  rules: [
    {
      test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /\.vue$/,
      use: 'vue-loader',
    },
    {
      test: /\.scss|\.css$/,
      use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    },
  ],
  plugins: [new VueLoaderPlugin()],
};
