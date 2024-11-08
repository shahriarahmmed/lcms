const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const caseList = sequelize.define("caseList", {
        case_list_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        court_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        case_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        case_no_1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        case_no_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        under_section: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        filing_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        defendant_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        file_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client_mobile: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    });

    return caseList;

}