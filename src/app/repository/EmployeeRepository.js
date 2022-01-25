const schemaEmployees = require('../schemas/employeeSchema');
const BaseRepository = require('./BaseRepository')

class EmployeeRepository extends BaseRepository {
  constructor() {
    super(schemaEmployees);
  }
}

module.exports = new EmployeeRepository();