'use strict';

module.exports = {
  guard: [ '/yiban', '/public/index.html' ],
  login: [ ...this.guard ],
};
