const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Payments",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            amount: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
};
