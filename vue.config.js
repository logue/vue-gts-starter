/* eslint-disable */

/** vue設定 */
const TerserPlugin = require('terser-webpack-plugin');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
        minSize: 100000,
        maxSize: 250000,
      },
      minimize: process.env.NODE_ENV === 'production',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ascii_only: true,
            compress: { drop_console: true },
            mangle: true,
            ecma: 2020,
            sourceMap: false,
            output: { comments: false, beautify: false },
          },
        }),
      ],
    },
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};
