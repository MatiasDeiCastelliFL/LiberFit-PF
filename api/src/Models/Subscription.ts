import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface SubscriptionAttributes {
    id: number
    name: string
    price: string
    description: string
  }
  
  export class SubscriptionInstance extends Model<SubscriptionAttributes> {}
  
  SubscriptionInstance.init(
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
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize: db,
      tableName: 'subscription',
      freezeTableName: true
    }
  )