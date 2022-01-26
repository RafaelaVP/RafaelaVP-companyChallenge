const ProductRepository = require('../repository/ProductRepository');

class ProductService {
    async create(payload) {
      const result = await ProductRepository.create(payload);
      return result;
    }
    async findAll(search) {
      const result = await ProductRepository.findByParams(search);
      return result;
    }
}

module.exports = new ProductService();
