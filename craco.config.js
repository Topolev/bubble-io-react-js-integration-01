const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: {
    plugins: {
      remove: ['MiniCssExtractPlugin'],
      add: [
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].css',
          ignoreOrder: false,
          experimentalUseImportModule: undefined,
          runtime: true,
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
      ],
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: 'static/js/[name].js',
      };
      return webpackConfig;
    },
  },
}; 
