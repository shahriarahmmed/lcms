const { DataTypes} = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        law_firm_names: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lawyer_name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return User;
}