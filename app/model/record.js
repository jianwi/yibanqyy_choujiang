'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;
  const Record = app.model.define('Record', {
    user: DataTypes.INTEGER,
    award: DataTypes.INTEGER,
    cost: DataTypes.INTEGER
  });
  return Record;
};
