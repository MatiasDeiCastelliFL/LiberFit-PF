import { Sequelize ,DataTypes} from 'sequelize'
import modelEmployee from './Models/Employee'
import modelLocation from './Models/Location'
import dotenv from 'dotenv'
dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
// TODO find the rigth type for sequilize
export let sequelize: any = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`,
  {
    logging: false, // set to console.log to see the raw SQL queries
  }
)
sequelize.models = [modelEmployee,modelLocation]
// modelEmployee(sequelize)
// modelLocation(sequelize,DataTypes)


export default {
  ...sequelize.models, 
  conn: sequelize,
}
