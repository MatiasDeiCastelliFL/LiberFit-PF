import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface GymAttributes {
  id: any
  name: string
  email: string
  phone: string
  image: string
}

export class GymInstance extends Model<GymAttributes> {}

GymInstance.init(
  {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize: db,
    tableName: 'gym',
    freezeTableName:true
  }
)
