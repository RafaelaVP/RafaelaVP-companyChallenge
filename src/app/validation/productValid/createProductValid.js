const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../errors/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50).required(),
      category: Joi.string().required(),
      price: Joi.string()
        .regex(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/)
        .required(),
      employee_id: Joi.string().required()
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
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
