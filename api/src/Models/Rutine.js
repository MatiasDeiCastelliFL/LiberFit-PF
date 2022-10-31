const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Rutines', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
      
      // type: DataTypes.INTEGER,
      // allowNull: false,
      // primaryKey: true,
      // autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)};
