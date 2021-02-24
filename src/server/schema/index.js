import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

// const {
//   constraintDirective,
//   constraintDirectiveTypeDefs,
// } = require("graphql-constraint-directive");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.resolve("src/server/schema", "typedefs"))
);

const resolvers = mergeResolvers(
  loadFilesSync(path.resolve("src/server/schema", "resolvers"))
);

const schema = makeExecutableSchema({
  // [constraintDirectiveTypeDefs, typeDefs]
  typeDefs,
  //   schemaTransforms: [constraintDirective()],
  resolvers,
});

export default schema;
