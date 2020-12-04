'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const user_list = await ctx.model.User.findAll();
    ctx.body = user_list;
  }
}

module.exports = HomeController;
