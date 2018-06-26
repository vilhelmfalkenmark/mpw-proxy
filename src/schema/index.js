import { makeExecutableSchema } from "graphql-tools";

import RootEntity from "../entities";

export default ({ headers }) => makeExecutableSchema(RootEntity({ headers }));
