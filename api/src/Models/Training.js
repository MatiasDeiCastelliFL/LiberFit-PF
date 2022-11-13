const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Trainings",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            timeSlot: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
              },
            timeSlot: {
                type: DataTypes.STRING,
                defaultValue: "Lunes a Viernes de 08:00 a 21:00hs",
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
        }
    );
};
