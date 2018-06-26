import Model from "./model";
import Resolvers from "./resolvers";

export default ({ connector, endpoints }) => {
  const model = Model({ connector, endpoints });
  return {
    resolvers: Resolvers({ model }),
    typeDefs: `
    type authenticateType {
      authenticated: Boolean
    }

    input authenticateArg {
      token: Int!
    }

    ##### MUTATION ####
    extend type Mutation {
      postAuthentication(params: authenticateArg) : authenticateType
    }`
  };
};
