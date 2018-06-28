import Model from "./model";
import Resolvers from "./resolvers";
import fs from "fs";
import path from "path";

export default ({ connector, endpoints }) => {
  const model = Model({ connector, endpoints });
  return {
    resolvers: Resolvers({ model }),
    typeDefs: [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")]
  };
};
