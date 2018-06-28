import Model from "./model";
import Resolvers from "./resolvers";

export default ({ connector, endpoints }) => {
  const model = Model({ connector, endpoints });
  return {
    resolvers: Resolvers({ model }),
    typeDefs: `
    type userType {
      userId: ID
      name: String
      postcode: Int
    }

    ##### QUERY ####
    extend type Query {
      getUser: userType
    }`
  };
};
