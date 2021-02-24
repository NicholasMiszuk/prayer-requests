require("dotenv").config();

module.exports = {
  url: `postgres://${process.env.APP_DB_ADMIN_USER}:${process.env.APP_DB_ADMIN_PASSWORD}@${process.env.AFCC_DB_HOST}:${process.env.AFCC_DB_PORT}/${process.env.APP_DB_NAME}`,
  dialect: "postgres",
};
