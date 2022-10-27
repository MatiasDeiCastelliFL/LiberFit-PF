import { DataTypes } from 'sequelize'

module.exports = (sequelize) => {
  sequelize.define(
    'employee',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // I expected this set the column default
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      account: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: 'https://ui-avatars.com/api/?background=random',
      },
    },
    {
      sequelize: db,
      tableName: 'employees',
      freezeTableName: true,
    }
  )
}
