const ProductController = require('../app/controller/ProductController');
const validCreate = require('../app/validation/productValid/createProductValid');
const validGetAll = require('../app/validation/productValid/findAllProduct');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/', validCreate, ProductController.create);
  routes.get('/', validGetAll, ProductController.getAll);
  server.use(prefix, routes);
};
