const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const subscriptionPlan = sequelize.define("subscriptionPlan", {
        plan_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        max_cases: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_monthly: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        price_yearly: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    });
    return subscriptionPlan;
};