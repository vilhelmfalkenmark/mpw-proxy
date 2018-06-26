export default ({ model }) => ({
  Query: {
    getDelivery: (_, { params: { deliveryId } }) =>
      model.getDelivery({ deliveryId }),
    getDeliveries: (_, {}) => model.getDeliveries()
  }
});
