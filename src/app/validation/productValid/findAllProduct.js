const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../errors/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50),
      category: Joi.string(),
      price: Joi.string(),
      employee_id: Joi.string().min(24).max(24).pattern('^[a-fA-F0-9]')
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
