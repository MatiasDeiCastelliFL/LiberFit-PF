const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Anuncios',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true, 
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      describe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgurl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      public_id: {
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
