const { addAfterLoader, loaderByName, removeLoaders } = require('@craco/craco');

module.exports = {
  plugin: {
    overrideWebpackConfig: ({
      webpackConfig,
      pluginOptions,
      context: { paths },
    }) => {
      addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: paths.appSrc,
        loader: require.resolve('swc-loader'),
        options: pluginOptions,
      });
      removeLoaders(webpackConfig, loaderByName('babel-loader'));

      return webpackConfig;
    },
  },
  options: {
    jsc: {
      target: 'es2015',
      externalHelpers: true,
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
      parser: {
        syntax: 'typescript',
        tsx: true,
        dynamicImport: true,
      },
    },
  },
};
