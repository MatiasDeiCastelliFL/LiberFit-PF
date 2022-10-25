import {
  Sequelize,
  DataTypes,
} from 'sequelize'

interface LocationAttributes {
  id: string
  name:string
  address: string
  phone: string
}

export default (sequelize:Sequelize) => {
  sequelize.define('location', {
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
  })
}
