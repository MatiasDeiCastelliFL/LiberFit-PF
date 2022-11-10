const {DataTypes}= require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'Locacions',
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      timeSlot: {
        type: DataTypes.STRING,
        defaultValue: "Lunes a Viernes de 7:30 a 17:00hs",
      }
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  )
}
