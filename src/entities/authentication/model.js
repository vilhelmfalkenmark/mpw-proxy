// import { view, lensPath } from "ramda";

export default ({ connector, endpoints }) => {
  //////////////////////////////////////////////////
  /**
   * Test reuest
   */
  //////////////////////////////////////////////////

  const postAuthentication = ({ token }) =>
    connector
      .postRequest({ path: endpoints.postAuthentication(), data: { token } })
      .then(response => response);

  return {
    postAuthentication
  };
};
