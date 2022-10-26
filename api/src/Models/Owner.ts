import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface OwnerAttributes {
    id: number
    idGym: number
    name: string
    email: string
    password: string
    phone: string
    avatar: string
  }
  
  export class OwnerInstance extends Model<OwnerAttributes> {}
  
  OwnerInstance.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idGym: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        allowNull: false,
      }
    },
    {
      sequelize: db,
      tableName: 'owner',
      freezeTableName: true
    }
  )