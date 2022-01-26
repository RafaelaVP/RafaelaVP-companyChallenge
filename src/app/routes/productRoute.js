const ProductController = require('../controller/ProductController');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/', ProductController.create);
  routes.get('/',  ProductController.getAll);
  server.use(prefix, routes);
};