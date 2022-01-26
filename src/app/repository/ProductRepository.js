const schemaProduct = require('../schemas/productSchemas');
const BaseRepository = require('./BaseRepository');

class ProductRepository extends BaseRepository {
  constructor() {
    super(schemaProduct);
  }
}

module.exports = new ProductRepository();
