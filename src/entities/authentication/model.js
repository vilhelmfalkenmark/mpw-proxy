export default ({ connector, endpoints }) => {
  /**
   * @function postPhoneAuthentication
   * @param phoneNumber
   * @param pinCode
   */

  const postPhoneAuthentication = ({ phoneNumber, pinCode }) =>
    console.log(phoneNumber, " phoneNumber") ||
    connector
      .postRequest({
        path: endpoints.postPhoneAuthentication(),
        data: { phoneNumber, pinCode }
      })
      .then(response => response);

  return {
    postPhoneAuthentication
  };
};
