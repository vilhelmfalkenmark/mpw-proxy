export default ({ model }) => ({
  Query: {
    getPage: (_, { params: { path } }) => {
      return model.getPage({ path }).then(data => {
        if (data.items.length !== 0) {
          return data.items[0];
        }
        const error = new Error();
        error.message = "page not found";
        error.code = 404;
        throw error;
      });
    }
  }
});
