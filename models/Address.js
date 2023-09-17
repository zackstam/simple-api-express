const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Address = sequelize.define('address', {
  // Model attributes are defined here
  street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  province: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {

});
// `sequelize.define` also returns the model
module.exports = Address;