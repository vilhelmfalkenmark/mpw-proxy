import Model from "./model";
import Resolvers from "./resolvers";

export default ({ connector, endpoints }) => {
  const model = Model({ connector, endpoints });
  return {
    resolvers: Resolvers({ model }),
    typeDefs: `
    type userType {
      name: String
      postcode: Int
    }

    input tokenArg {
      token: String!
    }

    ##### QUERY ####
    extend type Query {
      getUser(params: tokenArg) : userType
    }`
  };
};
