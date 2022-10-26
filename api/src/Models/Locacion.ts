import { DataTypes, Model,CreationOptional, Sequelize } from "sequelize";
import db from "../db";

interface LocationAttributes {
  id: any;
  name: string;
  address: string;
  phone: string;
}

export class LocacionInstance extends Model<LocationAttributes> {}
LocacionInstance.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
);
