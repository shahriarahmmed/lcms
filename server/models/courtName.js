const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const courtName = sequelize.define("courtName", {
        court_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        court_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
    });

    return courtName;
};

