import { Model, DataTypes } from 'sequelize'
import db from '../db'
// TODO review LOcation methods for data Base
// TODO create associations
interface LocationAttributes {
  id: any
  name: string
  address: string
  phone: string
}

class LocationInstance extends Model<LocationAttributes> {}

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
    freezeTableName:true
  }
)

export default LocationInstance
