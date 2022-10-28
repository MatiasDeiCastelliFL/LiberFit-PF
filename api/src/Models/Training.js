const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Trainings', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,    autoIncrement: true,
    },
    idClient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeSlot: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)};
