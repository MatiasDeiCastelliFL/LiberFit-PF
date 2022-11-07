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
            // TODO // franja horaria agregar date en string
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
};
