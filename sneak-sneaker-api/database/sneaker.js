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

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sneaker_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'sneakers',
      key: 'id',
    },
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'images',
  timestamps: false,
});

Sneaker.hasMany(Image, { foreignKey: 'sneaker_id' });
Image.belongsTo(Sneaker, { foreignKey: 'sneaker_id' });

module.exports = {
    Sneaker,
    Image
};