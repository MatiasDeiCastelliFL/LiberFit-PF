import {Sequelize} from 'sequelize'
// import { LocationAttributes, LocationInstance } from './Location'

export interface EmployeeAttributes {
  name: string
  idRol: string
  phone: string
  email: string
  password: string
  account: boolean
  avatar: string
}

export default (sequelize: Sequelize, DataTypes: any) => {
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
      defaultValue: "https://ui-avatars.com/api/?background=random",
    },
  })
}