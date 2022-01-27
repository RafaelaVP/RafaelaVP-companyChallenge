const Joi = require('joi');
const BadRequest = require('../errors/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      _id: Joi.string()
    });

    const { error } = schema.validate(req.params, { abortEarly: false });
    if (error) throw new BadRequest(error.message);
    return next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      details: {
        message: error.description
      }
    });
  }
};
