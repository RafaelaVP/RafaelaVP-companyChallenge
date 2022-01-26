const ProductService = require('../service/ProductService');

class ProductController {
  async create(req, res) {
    try {
      const result = await ProductService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const result = await ProductService.findAll(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new ProductController();
