import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress, graphqlConnect } from 'graphql-server-express';
import DealJacketSchema from './src/schema';
import mongoose from 'mongoose';
const express = require('express');
const body_parser = require('body-parser');
const awsServerlessExpress = require('aws-serverless-express');
import connect from 'connect';
import http from 'http';

// mongoose.connect('mongodb://52.3.232.149:27017/local')
mongoose.connect('mongodb://127.0.0.1:27017/local')
var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('openUri', () => {
 console.log( '+++Connected to mongoose')
})


const app = express();
app.use( body_parser.json({ limit: '50mb' }) );
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql',
        schema: DealJacketSchema
    }),
);
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: DealJacketSchema }));

// let's set the port on which the server will run
// app.set( 'port', 5000 );
//
// // start the server
// app.listen(
// 	app.get('port'),
// 	() => {
// 		const port = app.get('port');
// 		console.log('GraphQL Server Running at http://127.0.0.1:' + port );
// 	}
// );

http.createServer(app).listen(5000);

// const server = awsServerlessExpress.createServer(app);
// server.timeout = 30000;
//
// exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
