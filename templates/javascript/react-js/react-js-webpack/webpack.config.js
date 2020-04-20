/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = () => {
  const env = process.env.NODE_ENV;
  let envConfig;
  if (!env) {
    envConfig = require('./webpack/webpack.development');
  } else {
    envConfig = require(`./webpack/webpack.${env}`);
  }

  return webpackMerge({ mode: env }, commonConfig, envConfig);
};
