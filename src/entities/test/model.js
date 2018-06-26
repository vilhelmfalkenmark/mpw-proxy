// import { view, lensPath } from "ramda";

export default ({ connector, endpoints }) => {
  //////////////////////////////////////////////////
  /**
   * Test reuest
   */
  //////////////////////////////////////////////////
  const getNumber = ({ numberArg }) =>
    connector
      .getRequest({ path: endpoints.getNumber({ numberArg }) })
      .then(response => response);

  return {
    getNumber
  };
};
