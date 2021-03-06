const ProductService = require('../service/ProductService');
const { paginatedSerialize, serialize } = require('../serialize/productSerialize');

class ProductController {
  async create(req, res) {
    try {
      const result = await ProductService.create(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async getAll(req, res) {
    try {
      const result = await ProductService.findAll(req.query);
      return res.status(200).json(paginatedSerialize(result));
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new ProductController();
