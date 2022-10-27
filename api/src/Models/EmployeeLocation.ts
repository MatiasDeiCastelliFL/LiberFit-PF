import { DataTypes } from 'sequelize'

import db from '../db'

const employees = db.define('employees', { name: DataTypes.STRING });
const location = db.define('location', { name: DataTypes.STRING });

const EmployeesLocation = db.define('EmployeesLocation', {
    EmployeesId: {
      type: DataTypes.INTEGER,
      references: {
        model: employees, // 'Movies' would also work
        key: 'id'
      }
    },
    LocationId: {
      type: DataTypes.INTEGER,
      references: {
        model: location, // 'Actors' would also work
        key: 'id'
      }
    }
  });
  employees.belongsToMany(location, { through: EmployeesLocation });
  location.belongsToMany(employees, { through: EmployeesLocation });