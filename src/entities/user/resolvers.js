export default ({ model }) => ({
  Query: {
    getUser: (_, { params: { token } }) => model.getUser({ token })
  }
});
