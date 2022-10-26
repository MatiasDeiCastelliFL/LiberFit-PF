import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface RolAttributes {
    id: number
    name: string 
  }
  
  export class RolInstance extends Model<RolAttributes> {}
  
  RolInstance.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize: db,
      tableName: 'rol',
      freezeTableName: true
    }
  )