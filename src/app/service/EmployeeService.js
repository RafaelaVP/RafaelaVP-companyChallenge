const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');
const EmployeeRepository = require('../repository/EmployeeRepository');
const validCPF = require('../utils/Validcpf');

class EmployeeService {
  async create(payload) {
    const isCPFinvalid = validCPF(payload.cpf);

    if (isCPFinvalid) throw new BadRequest(isCPFinvalid);

    const result = await EmployeeRepository.create(payload);
    return result;
  }
  async findAll(search) {
    const result = await EmployeeRepository.findByParams(search);
    if (result.docs.length === 0) throw new NotFound('Results not found');
    return result;
  }
  async update(_id, payload) {
    const result = await EmployeeRepository.update({ _id }, payload);
    return result;
  }

  async delete(id) {
    const idNotFound = await this.findAll({_id:id});
    if(!idNotFound) throw new NotFound('id not found in the base');
     return await EmployeeRepository.delete(id);
  }
}

module.exports = new EmployeeService();