import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface MachineAttributes {
  id: string
  name: string
  image: string
  muscle:string
}

export class MachineInstance extends Model<MachineAttributes> {}

MachineInstance.init(
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    muscle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'machine',
  }
)
