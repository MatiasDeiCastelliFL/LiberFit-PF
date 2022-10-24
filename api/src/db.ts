import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DIALECT } = process.env
// TODO find the rigth type for sequilize
let sequelize: any = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`,
  {
    logging: false, // set to console.log to see the raw SQL queries
  }
)

// try {
//   await sequelize.authenticate()
//   console.log('Connection has been established successfully.')
// } catch (error) {
//   console.error('Unable to connect to the database:', error)
// }

export default {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.ts');
  conn: sequelize, // para importar la conexión { conn } = require('./db.ts');
}
