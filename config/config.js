module.exports = {
    app: {
      debug: true, // turn debugging on/off
      host: 'localhost', // your server host, usually localhost
      port: 3000 // port the server runs on
    },
    database: {
      development: {
        username: "root",
        password: "",
        database: "",
        host: "localhost",
        dialect: "mysql",
        timezone: "+07:00",
        logging: true,
        pool: {
          max: 5,
          min: 0,
          idle: 30000,
          acquire: 1000000,
        },
        use_env_variable: false,
      },
    },
    jwtExpired: 3600,
    jwtSecret: 'express',
    env: 'development',
    baseUrl: 'http://localhost:3000',
    staticPath: {
      img: '/img/'
    },
  };