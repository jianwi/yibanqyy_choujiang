'use strict';

module.exports = () => {
  return async function authorize(ctx, next) {
    console.log('自定义中间件', ctx.path);
    next();
  };
};
