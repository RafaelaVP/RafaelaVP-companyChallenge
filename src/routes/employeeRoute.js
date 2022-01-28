const EmployeeController = require('../app/controller/EmployeeController');
const validCreate = require('../app/validation/employeeValid/createValid');
const validUpdate = require('../app/validation/employeeValid/updateValid');
const validId = require('../app/validation/validId');
const validGetAll = require('../app/validation/employeeValid/findAllValid');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', validCreate, EmployeeController.create);
  routes.get('/', validGetAll, EmployeeController.getAll);
  routes.put('/:employee_id', validId, validUpdate, EmployeeController.update);
  routes.delete('/:employee_id', validId, EmployeeController.delete);
  server.use(prefix, routes);
};
