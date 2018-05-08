// app level imports
import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import path from 'path';
import { fileLoader, mergeTypes,  mergeResolvers } from 'merge-graphql-schemas';
import cors from  'cors';

// local imports from files
import models from './models';

// merge all the schemas into one file
const types = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(types);

//merge all resolvers into one file
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolversArray);

// make the merged schema executable
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const PORT = 8080;
const app = express();
const graphqlEndpoint = '/graphql';

// enabling any website to access our server
app.use(cors('*'));

// Passing the context as postgres so that schema knows which DB to access.
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema: schema, context: {
    models,
  } 
}));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint}));

models.sequelize.sync().then(() => {
  app.listen(PORT);
});