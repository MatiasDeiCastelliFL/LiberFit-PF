const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Rols",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                defaultValue: "Cliente",
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
              }
        },
        {
            freezeTableName: true,
            timestamps: true,
        }
    );
};
