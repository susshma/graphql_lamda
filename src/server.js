import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import DealJacketSchema from './schema';
import mongoose from 'mongoose';
const app = express();
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: DealJacketSchema }));
export default app;
