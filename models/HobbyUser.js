const User = require('./User');
const Hobby = require('./Hobby');
const sequelize = require("../config/database");
const { DataTypes } = require('sequelize');


const HobbyUser = sequelize.define('hobbyUser', {
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User, // 'Movies' would also work
        key: 'id'
      }
    },
    HobbyId: {
      type: DataTypes.INTEGER,
      references: {
        model: Hobby, // 'Actors' would also work
        key: 'id'
      }
    },
  });

module.exports = HobbyUser;
