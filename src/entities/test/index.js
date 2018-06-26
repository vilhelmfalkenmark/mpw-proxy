import Model from "./model";
import Resolvers from "./resolvers";

export default ({ connector, endpoints }) => {
  const model = Model({ connector, endpoints });
  return {
    resolvers: Resolvers({ model }),
    typeDefs: `
    type numberType {
      myNumber: Int!
      name: String
      age: Int
    }

    input numberTypeArg {
      numberArg: Int!
    }

    ##### QUERY ####
    extend type Query {
     getNumber(params: numberTypeArg): numberType
    }`
  };
};
