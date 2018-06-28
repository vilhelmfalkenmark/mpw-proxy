import Model from "./model";
import Resolvers from "./resolvers";

export default ({ connector, endpoints }) => {
  const model = Model({ connector, endpoints });
  return {
    resolvers: Resolvers({ model }),
    typeDefs: `
    type pageType {
      fields: fieldsType
    }

    type fieldsType {
      title: String
      path: String
      body: String
    }

    input pageArg {
      path: String!
    }

    ##### QUERY ####
    extend type Query {
      getPage(params: pageArg) : pageType
    }`
  };
};
