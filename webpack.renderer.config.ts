import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import { alias } from './webpack.alias';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push(
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  });

rules.push({
  test: /\.jsx?$/,
  use: 'babel-loader',
  exclude: /node_modules/,
});

rules.push({
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      },
    },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias,
  },
};
