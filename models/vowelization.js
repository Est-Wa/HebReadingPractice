const { sequelize, DataTypes } = require("./sequelize");

const Vowelization = sequelize.define(
    "vowelizations",
    {
        vowelization_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        vowelization: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        timestamps: false,
    }
);


module.exports = Vowelization