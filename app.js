const express = require('express');
const {ApolloServer} = require ('apollo-server-express');
const {typeDefs, resolvers} = require('./projects/projects');

const app = express();

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.start().then(() => server.applyMiddleware({app}));

app.listen({port:5000}, () => {
    console.log("SERVER RUNNING ON PORT 5000");
});

