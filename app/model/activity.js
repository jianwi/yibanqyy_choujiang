'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;
  const user = app.model.define("Activity",{
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    creator: DataTypes.INTEGER,
    prize: DataTypes.INTEGER,
  });
  return user;
};
