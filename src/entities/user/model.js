// import { view, lensPath } from "ramda";

export default ({ connector, endpoints }) => {
  //////////////////////////////////////////////////
  /**
   * Test reuest
   */
  //////////////////////////////////////////////////

  const getUser = () =>
    connector
      .getRequest({ path: endpoints.getUser() })
      .then(response => response);

  return {
    getUser
  };
};
