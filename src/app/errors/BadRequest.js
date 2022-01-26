class BadRequest extends Error {
  constructor(description) {
    super();
    this.statusCode = 400;
    this.description = description;
    this.message = 'Bad Request';
  }
}

module.exports = BadRequest;
