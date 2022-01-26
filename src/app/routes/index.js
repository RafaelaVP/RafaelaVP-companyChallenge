const { Router } = require('express');
const employee = require('./employeeRoute');
const product = require('./productRoute');
module.exports = (server) => {
  server.use((req, res, next) => {
    employee(server, new Router());
    product(server, new Router());
    next();
  });
};
