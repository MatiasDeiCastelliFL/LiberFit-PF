const {DataTypes}= require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'exercise',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      repetition: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      series: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      video: {
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
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  )
}