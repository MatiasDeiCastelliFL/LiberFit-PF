import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface ExerciseAttributes {
  id: number
  name: string
  repetition: number
  series: number
  video: string
  image: string
  muscle: string
}

export class ExerciseInstance extends Model<ExerciseAttributes> {}

ExerciseInstance.init(
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
    repetition: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    series: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    video: {
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
    tableName: 'exercise',
  }
)
