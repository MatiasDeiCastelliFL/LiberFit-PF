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
            descripcion:{
                type:DataTypes.STRING,
                allowNull:true
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            amount: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            fechaCreacion: {
                type: DataTypes.DATEONLY,
                defaultValue:DataTypes.NOW
            },
            fechaFinalizacion: {
                type: DataTypes.DATEONLY,
                allowNull: true
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
