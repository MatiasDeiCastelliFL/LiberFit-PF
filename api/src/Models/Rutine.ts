import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface RutineAttributes {
    id: number
    idEmployee: number
    name: string
  }
  
  export class RutineInstance extends Model<RutineAttributes> {}
  
  RutineInstance.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idEmployee: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize: db,
      tableName: 'rutine',
      freezeTableName: true
    }
  )