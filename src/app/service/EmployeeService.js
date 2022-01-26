const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');
const EmployeeRepository = require('../repository/EmployeeRepository');
const FormatDate = require('../utils/FormatDate');
const validCPF = require('../utils/validCPF');

class EmployeeService {
  async create(payload) {
    const isCPFinvalid = validCPF(payload.cpf);

    if (isCPFinvalid) throw new BadRequest(isCPFinvalid);
    const payloadDate = payload;
    payloadDate.birthday = FormatDate.formatToBase(payload.birthday);
    const result = await EmployeeRepository.create(payloadDate);
    return result;
  }

  async findAll(search) {
    const result = await EmployeeRepository.findByParams(search);
    if (result.docs.length === 0) throw new NotFound('Results not found');
    return result;
  }

  async update(id, payload) {
    const idNotFound = await this.findAll({ _id: id });
    if (!idNotFound) throw new NotFound('id not found in the base');
    return EmployeeRepository.update(id, payload);
  }

  async delete(id) {
    const idNotFound = await this.findAll({ _id: id });
    if (!idNotFound) throw new NotFound('id not found in the base');
    return EmployeeRepository.delete(id);
  }
}

module.exports = new EmployeeService();
