const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Payments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    membership: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)};
