import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import express from "express";
import bodyParser from "body-parser";
// import path from "path";
import cors from "cors";

import config from "./config";
import schema from "./schema";

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//////////////////////////////////////////////////
/**
 * HANDLE CORS
 */
//////////////////////////////////////////////////
server.use(cors());

//////////////////////////////////////////////////
/**
 * SET UP GRAPHQL
 */
//////////////////////////////////////////////////
server.use(
  config.apiPath,
  graphqlExpress(req => ({
    schema: schema({ headers: req.headers }),
    formatError(err) {
      return {
        message: err.message,
        code: err.originalError && err.originalError.code
      };
    }
  }))
);

// Setup Graphiql IDE
server.use(
  config.graphiqlPath,
  graphiqlExpress({
    passHeader: JSON.stringify(config.headers).replace(/[{}]/g, ""),
    endpointURL: config.apiPath
  })
);

server.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
