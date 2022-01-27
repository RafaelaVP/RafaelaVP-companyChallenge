const ProductController = require('../app/controller/ProductController');
// const validCreate = require('../app/validation/productValid/createProductValid');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/', ProductController.create);
  routes.get('/', ProductController.getAll);
  server.use(prefix, routes);
};
