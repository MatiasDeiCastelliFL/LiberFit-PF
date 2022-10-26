import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'
// TODO review LOcation metods for data Base
interface LocationAttributes {
  id: string
  name: string
  address: string
  phone: string
}

export class LocationInstance extends Model<LocationAttributes> {}

LocationInstance.init(
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'location',
  }
)
