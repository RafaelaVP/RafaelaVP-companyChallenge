const EmployeeController = require('../controller/ProductController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',validCreate, EmployeeController.create);
  routes.get('/',  EmployeeController.getAll);
  server.use(prefix, routes);
};