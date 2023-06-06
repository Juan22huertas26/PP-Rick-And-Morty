const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // id, name, status, species, type, gender, origin, location, image
  sequelize.define('Characters', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    species:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: false
    },
    origin:{
      type: DataTypes.STRING,
      allowNull: false
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: "Characters"
  });
};