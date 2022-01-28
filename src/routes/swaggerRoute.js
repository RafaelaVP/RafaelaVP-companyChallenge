const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');

module.exports = (server, routes, prefix = '/api/v1/api-docs') => {
  server.use(prefix, routes, swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
