const {DataTypes}= require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Owners', {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: "https://i.pravatar.cc/300",
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)};