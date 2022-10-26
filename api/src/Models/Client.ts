import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface ClientAttributes {
  id: number
  name: string
  phone: string
  email: string
  passwords: string
  active: boolean
  image: string
}

export class ClientInstance extends Model<ClientAttributes> {}

ClientInstance.init(
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwords: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize: db,
    tableName: 'client',
    freezeTableName:true
  }
)
