'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;
  const User = app.model.define('user', {
    name: DataTypes.STRING,
    yb_uid: DataTypes.STRING,
    times: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
  });
  return User;
};
