import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const db = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`,
  {
    logging: false,
  }
)

import LocationInstance from './Models/Locacion'
import MachineInstance from './Models/Machine'

//Declaramos las relaciones.
// LocationInstance.belongsTo(MachineInstance, { targetKey: 'id' })
// MachineInstance.hasMany(LocationInstance, { sourceKey: 'id' })

// LocationInstance.hasMany(MachineInstance)
// MachineInstance.belongsTo(LocationInstance)

export default db
