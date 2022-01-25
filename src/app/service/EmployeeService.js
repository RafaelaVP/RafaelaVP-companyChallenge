const EmployeeRepository = require('../repository/EmployeeRepository');

class EmployeeService {
  async create(payload) {
    const result = await EmployeeRepository.create(payload);
    return result;
  }
}

module.exports = new EmployeeService();