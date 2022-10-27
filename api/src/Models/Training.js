import { DataTypes } from 'sequelize';

module.exports = (sequelize) => {
  sequelize.define('trainings', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
