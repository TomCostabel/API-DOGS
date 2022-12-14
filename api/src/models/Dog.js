const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("dog", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },

        heightMin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heightMax: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weightMin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weightMax: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lifespanMin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lifespanMax: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
};
