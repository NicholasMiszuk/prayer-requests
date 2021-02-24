// import { createComplexityLimitRule } from "graphql-validation-complexity";
// import depthLimit from "graphql-depth-limit";
import schema from "../../server/schema";

require("dotenv").config();

// const ComplexityLimitRule = createComplexityLimitRule(
//   process.env.APP_QUERY_COST_COMPLEXITY_LIMIT || 10000,
//   {
//     formatErrorMessage: (cost) =>
//       `Query with cost ${cost} exceeds complexity limit`,
//   }
// );

const { ApolloServer } = require("apollo-server-micro");
const models = require("../../server/models");
// const { loadMe } = require("../../server/authHelper");

const server = new ApolloServer({
  schema,
  debug: false,
  //   validationRules: [
  //     depthLimit(process.env.APP_MAX_DEPTH_LIMIT || 4),
  //     ComplexityLimitRule,
  //   ],
  //   context: async ({ req }) => {
  //     const kcToken =
  //       req.headers.Authorization ||
  //       req.headers.authorization ||
  //       process.env.APP_DEV_TOKEN;

  //     const me = await loadMe(kcToken, models);

  //     return { kcToken, me, models };
  //   },
  formatError: (err) => {
    if (err.message.startsWith("Database Error: ")) {
      return new Error("[Database] - Internal server error");
    }
    if (err.message.startsWith("Not authorized")) {
      return new Error(
        "[Authorization] - You do not have permission to perform the specified task!"
      );
    }
    if (err.extensions.code === "GRAPHQL_VALIDATION_FAILED") {
      return new Error(`[Validation Error] - ${err.message}`);
    }
    return err;
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql",
});
