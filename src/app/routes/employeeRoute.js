const EmployeeController = require('../controller/EmployeeController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', EmployeeController.create);
  server.use(prefix, routes);
};
