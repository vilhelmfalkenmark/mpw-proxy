import contentfulConfig from "../config/contentful";

export default {
  testEndpoints: {
    getNumber: ({ numberArg }) =>
      `http://localhost:8888/number?number=${numberArg}`,
    getName: testName => `http://localhost:8888/name?name=${testName}`
  },
  deliveriesEndpoints: {
    getDeliveries: () => `http://localhost:8888/deliveries`,
    getDelivery: ({ deliveryId }) =>
      `http://localhost:8888/delivery?deliveryId=${deliveryId}`
  },
  authenticationEndpoints: {
    postPhoneAuthentication: () =>
      `http://localhost:8888/authentication/phonenumber`,
    postEmailAuthentication: () => `http://localhost:8888/authentication/email`
  },
  userEndpoints: {
    getUser: () => `http://localhost:8888/user`
  },
  contentfulPageEndpoints: {
    getPage: ({ path }) =>
      `${contentfulConfig.deliveryApiPath}/spaces/${
        contentfulConfig.spaceId
      }/environments/${contentfulConfig.environmentId}/entries?access_token=${
        contentfulConfig.deliveryAccessToken
      }&content_type=page&fields.path=${path}`
  }
};
