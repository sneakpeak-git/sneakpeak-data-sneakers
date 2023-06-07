const { Sequelize } = require("sequelize");

async function checkDatabaseConnection(config) {
  const sequelize = new Sequelize(config);

  try {
    await sequelize.authenticate();
    console.log("MySQL started, loading app...");
    process.exit(0);
  } catch (error) {
    console.log("MySQL is down. Retrying in 2 seconds...");
    setTimeout(() => checkDatabaseConnection(config), 2000);
  }
}

const config = {
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  dialect: "mysql",
  logging: false,
};

await checkDatabaseConnection(config);
