const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Sneaker = sequelize.define('Sneaker', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand: {
    type: DataTypes.STRING
  },
  model: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  color: {
    type: DataTypes.STRING
  },
  release_date: {
    type: DataTypes.DATEONLY
  },
  description: {
    type: DataTypes.TEXT
  },
  extra: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'sneakers',
  timestamps: false,
});

module.exports = Sneaker;