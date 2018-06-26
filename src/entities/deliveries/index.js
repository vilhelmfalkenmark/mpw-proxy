import Model from "./model";
import Resolvers from "./resolvers";

export default ({ connector, endpoints }) => {
  const model = Model({ connector, endpoints });
  return {
    resolvers: Resolvers({ model }),
    typeDefs: `
    type deliveryType {
      date: String
      postCode: Int
    }

    type deliveriesType {
      deliveries: [deliveryType]
    }

    input deliveryIdArg {
      deliveryId: Int!
    }

    ##### QUERY ####
    extend type Query {
     getDeliveries: deliveriesType,
     getDelivery(params: deliveryIdArg) : deliveryType
    }`
  };
};
