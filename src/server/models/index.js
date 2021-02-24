require("dotenv").config();

const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize(
  `postgres://${process.env.APP_DB_ADMIN_USER}:${process.env.APP_DB_ADMIN_PASSWORD}@${process.env.AFCC_DB_HOST}:${process.env.AFCC_DB_PORT}/${process.env.APP_DB_NAME}`,
  { logging: process.env.NODE_ENV !== "development" }
);

sequelize
  .authenticate()
  .then(function goodConnection() {
    process.stdout.write(`\nConnection has been established successfully.\n`);
  })
  .catch(function badConnection(err) {
    process.stdout.write(`\nUnable to connect to the database:${err}\n`);
  });
// const myResource = require("./myResource")(sequelize, Sequelize);

const models = [];

models.forEach((model) => {
  db[model.name] = model;
});

models.forEach((model) => {
  if (db[model.name].associate) {
    db[model.name].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
