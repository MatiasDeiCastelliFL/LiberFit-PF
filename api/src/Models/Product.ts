import { Sequelize, Model, DataTypes } from 'sequelize'
import db from '../db'

interface ProductAttributes {
    id: number
    name: string
    price: string
    stock: string
    code: string
    image: string
    description: string
    size: string
    brand: string 
  }
  
  export class ProductInstance extends Model<ProductAttributes> {}
  
  ProductInstance.init(
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
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize: db,
      tableName: 'product',
      freezeTableName: true
    }
  )