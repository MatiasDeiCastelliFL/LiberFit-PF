const {DataTypes}= require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'LocacionReviews',
    {
      clientId: {
        type: DataTypes.STRING,
      },
      rate: {
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  )
}
