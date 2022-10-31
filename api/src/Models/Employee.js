const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define(
    'Employees',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
  
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
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
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: 'https://ui-avatars.com/api/?background=random',
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  )
}
