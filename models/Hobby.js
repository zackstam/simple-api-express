const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Hobby = sequelize.define('Hobby', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {

});
// `sequelize.define` also returns the model
module.exports = Hobby;