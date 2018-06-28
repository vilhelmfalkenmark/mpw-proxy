export default ({ model }) => ({
  Query: {
    getUser: (_, {}) => model.getUser()
  }
});
