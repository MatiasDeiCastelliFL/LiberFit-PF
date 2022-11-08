const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Subscriptions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration:{
      type: DataTypes.INTEGER,
      defaultValue:1
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)};
