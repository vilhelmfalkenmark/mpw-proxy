// import { view, lensPath } from "ramda";

export default ({ connector, endpoints }) => {
  //////////////////////////////////////////////////
  /**
   * Test reuest
   */
  //////////////////////////////////////////////////

  const getUser = ({ token }) =>
    connector
      .getRequest({ path: endpoints.getUser({ token }) })
      .then(response => response);

  return {
    getUser
  };
};
