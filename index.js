const express = require('express');
const graphQL = require('express-graphql');

const schema = require('./schema');

const app = express();
app.listen(3000);

app.use('/graphql', graphQL({
    schema,
    graphiql: true
}));