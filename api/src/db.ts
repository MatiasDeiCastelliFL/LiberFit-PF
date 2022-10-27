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
Location

export default db
