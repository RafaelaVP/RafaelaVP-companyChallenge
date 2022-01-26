const EmployeeController = require('../controller/EmployeeController');
const validCreate = require ('../vallidation/employee/createVallidate');
const validUpdate = require('../vallidation/employee/updateValidate');
module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',validCreate, EmployeeController.create);
  routes.get('/', EmployeeController.getAll);
  routes.put('/:employee_id', validUpdate, EmployeeController.update);
  routes.delete('/:id',  EmployeeController.delete);
  server.use(prefix, routes);
};
