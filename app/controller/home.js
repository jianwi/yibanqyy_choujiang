'use strict';
const yiban = require('../../config/yiban');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = yiban;
    console.log(yiban);
  }
}

module.exports = HomeController;
