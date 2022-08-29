const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("temperament", {
        nameTemp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idTemp: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
    });
};
