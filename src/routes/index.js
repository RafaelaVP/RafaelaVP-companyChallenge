const { Router } = require('express');
const employee = require('./employeeRoute');
const product = require('./productRoute');
const swagger = require('./swaggerRoute');

module.exports = (server) => {
  server.use((req, res, next) => {
    employee(server, new Router());
    product(server, new Router());
    swagger(server, new Router());
    next();
  });
};
