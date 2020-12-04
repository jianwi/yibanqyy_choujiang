'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;
  const User = app.model.define('user', {
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    probability: DataTypes.INTEGER,
  });
  return User;
};
