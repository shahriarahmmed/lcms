const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const caseDetails = sequelize.define("caseDetails", {
        case_details_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        case_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        court_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        next_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        order_details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return caseDetails;
}