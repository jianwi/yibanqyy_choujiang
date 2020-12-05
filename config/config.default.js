/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607075508936_5833';

  // add your middleware config here
  config.middleware = [ 'authorize' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // // sequelize
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'wxcj',
    password: 'wxcjwxcj',
    database: 'wxcj',
  };
  return {
    ...config,
    ...userConfig,
  };
};
