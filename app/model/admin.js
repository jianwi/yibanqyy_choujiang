'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;
  const Admin = app.model.define('Admin',{
    user: DataTypes.INTEGER,
  });
  return Admin;
};
