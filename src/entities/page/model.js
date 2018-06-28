export default ({ connector, endpoints }) => {

  const getPage = ({ path }) =>
    connector
      .getRequest({ path: endpoints.getPage({ path }) })
      .then(response => response);

  return {
    getPage
  };
};
