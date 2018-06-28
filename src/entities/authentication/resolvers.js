export default ({ model }) => ({
  Mutation: {
    postPhoneAuthentication: (_, { params: { phoneNumber, pinCode } }) =>
      model.postPhoneAuthentication({ phoneNumber, pinCode })
  }
});
