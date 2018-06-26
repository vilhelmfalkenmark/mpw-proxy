export default ({ model }) => ({
  Mutation: {
    postAuthentication: (_, { params: { token } }) =>
      model.postAuthentication({ token })
  }
});
