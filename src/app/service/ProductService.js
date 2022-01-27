const ProductRepository = require('../repository/ProductRepository');
const EmployeeService = require('./EmployeeService');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');

class ProductService {
  async create(payload) {
    const { employee_id } = payload;
    const empployeeValid = await EmployeeService.findAll({ _id: employee_id });

    if (!empployeeValid) throw new NotFound('id');

    if (empployeeValid.docs[0]._doc.office !== 'gerente')
      throw new BadRequest('error required active manager to create the product');

    if (empployeeValid.docs[0]._doc.situation === 'deactivate') throw new BadRequest('error manager must be active.');
    const result = await ProductRepository.create(payload);

    return result;
  }

  async findAll({ min_price = 0, max_price = 13, ...search }) {
    const priceSearch = {
      price: { $gte: min_price, $lte: max_price },
      ...search
    };
    const result = await ProductRepository.findByParams(priceSearch);
    return result;
  }
}

module.exports = new ProductService();
