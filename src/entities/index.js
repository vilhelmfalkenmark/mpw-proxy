import { mergeDeepWith, concat } from "ramda";
import rootTypeDefs from "./rootTypeDefs";

import HTTPconnector from "../connector";
import endpoints from "../connector/endpoints";

// IMPORT ENTITIES
import Test from "./test";
import Deliveries from "./deliveries";
import Authentication from "./authentication";
import User from "./user";
import Page from "./page";

export default ({ headers }) => {
  const connector = HTTPconnector({ headers });

  // INITIALIZE ENTITIES

  // Test
  const testEntity = Test({
    connector,
    endpoints: endpoints.testEndpoints
  });

  const deliveriesEntity = Deliveries({
    connector,
    endpoints: endpoints.deliveriesEndpoints
  });

  const authenticationEntity = Authentication({
    connector,
    endpoints: endpoints.authenticationEndpoints
  });

  const userEntity = User({
    connector,
    endpoints: endpoints.userEndpoints
  });

  const pageEntity = Page({
    connector,
    endpoints: endpoints.contentfulPageEndpoints
  });

  // All initialized entities should be listed in this array
  const entitiesArray = [
    testEntity,
    deliveriesEntity,
    authenticationEntity,
    userEntity,
    pageEntity
  ];

  const combinedResolve = arr =>
    arr.reduce(
      (acc, { resolvers }) => mergeDeepWith(concat, acc, resolvers),
      {} // Initial value for reduce
    );

  const combinedTypeDefs = arr =>
    arr.reduce((acc, { typeDefs }) => acc.concat(typeDefs), [rootTypeDefs]);

  const rootSchema = arr => ({
    typeDefs: combinedTypeDefs(arr),
    resolvers: combinedResolve(arr)
  });

  return rootSchema(entitiesArray);
};
