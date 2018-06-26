export default ({ model }) => ({
  Query: {
    getNumber: (_, { params: { numberArg } }) => model.getNumber({ numberArg })
  }
});
