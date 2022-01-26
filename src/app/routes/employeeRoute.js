const EmployeeController = require('../controller/EmployeeController');
const validCreate = require ('../validation/employee/createVallidate');
const validUpdate = require('../validation/employee/updateValidate');
module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',validCreate, EmployeeController.create);
  routes.get('/', EmployeeController.getAll);
  routes.put('/:employee_id', validUpdate, EmployeeController.update);
  routes.delete('/:employee_id',  EmployeeController.delete);
  server.use(prefix, routes);
};
