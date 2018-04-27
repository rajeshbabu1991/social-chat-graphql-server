// app level imports
import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress} from 'apollo-server-express';

// local imports from files
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';


export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const PORT = 8080;
const app = express();
const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema: schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint}));

models.sequelize.sync().then(() => {
  app.listen(PORT);
});