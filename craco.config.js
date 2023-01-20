// eslint-disable-next-line import/no-extraneous-dependencies
const CracoAlias = require('craco-alias');
const swcPlugin = require('./swcPlugin');

module.exports = {
  plugins: [
    { plugin: swcPlugin },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
  ],
};
