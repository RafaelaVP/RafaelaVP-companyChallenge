const EmployeeRepository = require('../repository/EmployeeRepository');

class EmployeeService {
  async create(payload) {
    const result = await EmployeeRepository.create(payload);
    return result;
  }
  async findAll(search) {
    const result = await EmployeeRepository.findByParams(search);
    return result;
  }
  async update(_id, payload) {
    return await EmployeeRepository.update({ _id }, payload);
  }

  async delete(id) {
     return await EmployeeRepository.delete(id);
  }

  async getById(id) {
    const result = await EmployeeRepository.getById(id);
    return result;
  }
}

module.exports = new EmployeeService();