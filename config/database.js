const { Sequelize } = require("sequelize");
const config = require('./config');
const configEnv = config.database[config.env];

const sequelize = new Sequelize({
  database: configEnv.database,
  host: configEnv.host,
  username: configEnv.username,
  password: configEnv.password,
  dialect: "mysql",
});

(async function() {
  try {
    await sequelize.authenticate();
    sequelize.sync({ force: false, logging: false });
  } catch (error) {
    console.log(error, 'error neh ');
  }

})()


module.exports = sequelize;