const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../errors/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50),
      min_price: Joi.number().optional(),
      max_price: Joi.number().optional()
    });
    const { error } = schema.validate(req.query, { abortEarly: false });
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
