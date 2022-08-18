const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  peso: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  añosDeVida: {
      type: DataTypes.STRING,
      allowNull: true
  }
  
  });
};
