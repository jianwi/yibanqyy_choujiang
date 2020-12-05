'use strict';

const YibanAuth = require('./yiban/auth');
const YibanConfig = require('../config/yiban');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  router.get('/', controller.home.index);

  router.get('/yiban', function(ctx) {
    const yb = new YibanAuth(ctx.query.verify_request, YibanConfig, function (url) {
      ctx.unsafeRedirect(url);
    });
    ctx.body = yb;
  });
};
