class NotFound extends Error {
    constructor(description) {
      super();
      this.statusCode = 404;
      this.description = description;
      this.message = 'Not Found';
    }
  }
  
  module.exports = NotFound;