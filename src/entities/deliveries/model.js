// import { view, lensPath } from "ramda";

export default ({ connector, endpoints }) => {
  //////////////////////////////////////////////////
  /**
   * Test reuest
   */
  //////////////////////////////////////////////////
  const getDelivery = ({ deliveryId }) =>
    connector
      .getRequest({ path: endpoints.getDelivery({ deliveryId }) })
      .then(response => response);

  const getDeliveries = () =>
    connector
      .getRequest({ path: endpoints.getDeliveries() })
      .then(response => response);

  return {
    getDelivery,
    getDeliveries
  };
};
