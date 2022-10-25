import { Sequelize, CreationOptional, DataTypes } from 'sequelize'

interface EmployeeAttributes {
  id: string
  name: string
  phone: string
  password: string
  account: boolean
  avatar: string
}

export default (sequelize: Sequelize) => {
  sequelize.define('employee', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
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
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://ui-avatars.com/api/?background=random',
    },
  })
}
