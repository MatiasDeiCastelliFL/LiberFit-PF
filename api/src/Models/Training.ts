import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface TrainingAttributes {
    id: number
    idClient: number
    name: string
    image: string
    timeSlot: string
  }
  
  export class TrainingInstance extends Model<TrainingAttributes> {}
  
  TrainingInstance.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idClient: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeSlot: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize: db,
      tableName: 'training',
      freezeTableName: true
    }
  )