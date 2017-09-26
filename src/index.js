import http from 'http';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import mongoose from 'mongoose';
import app from './server';
import schema from './schema';
const server = http.createServer(app);
let currentApp = app;
server.listen(3000, () => {
  console.log(`GraphQL-server listening on port 3000.`)
});
if (module.hot) {
  module.hot.accept(['./server', './schema'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}

mongoose.connect('mongodb://localhost:27017/local')
var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('openUri', () => {
 console.log( '+++Connected to mongoose')
})
