const Sequelize = require("sequelize");

const { Op } = Sequelize;

module.exports = {
  Query: {
    async hello(root, args, { me, models }) {
      return "HELLO!";
    },
  },
};
