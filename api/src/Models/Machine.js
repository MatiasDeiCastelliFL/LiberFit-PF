const {DataTypes}= require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'Machines',
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
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      muscle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      }
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  )
}


