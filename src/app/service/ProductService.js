const ProductRepository = require('../repository/ProductRepository');
const EmployeeService = require('./EmployeeService');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');

class ProductService {
  async create(payload) {
    const { employee_id } = payload;
    const empployeeValid = await EmployeeService.findAll({ _id: employee_id });

    if (!empployeeValid) throw new NotFound('id');

    if (empployeeValid.docs[0]._doc.office !== 'gerente') throw new BadRequest('Tem que ser gerente');

    if (empployeeValid.docs[0]._doc.situation === 'deactivate') throw new BadRequest('Tem que estar ativo');
    const result = await ProductRepository.create(payload);

    return result;
  }

  async findAll(search, min_price = 0, max_price = 20000) {
    const test = {
      price: { $gte: min_price, $lte: max_price }
    };
    const result = await ProductRepository.findByParams(search, test);
    return result;
  }
}

module.exports = new ProductService();

// const min_price = 0;
// const max_price = 100;
// if (search.docs[0]._doc.price >= min_price)
// if (test <= max_price) {
//   return test;
// }
