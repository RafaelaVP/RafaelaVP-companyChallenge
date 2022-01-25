const EmployeeController = require('../controller/EmployeeController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', EmployeeController.create);
  routes.get('/:id',  EmployeeController.getById);
  routes.get('/', EmployeeController.getAll);
  routes.put('/:id',  EmployeeController.update);
  routes.delete('/:id',  EmployeeController.delete);
  server.use(prefix, routes);
};
