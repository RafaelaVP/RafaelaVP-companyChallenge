const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../errors/BadRequest');
const { enumOffice } = require('../../utils/enum');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50),
      cpf: Joi.string().min(11).max(11),
      office: Joi.string()
        .valid(...enumOffice)
        .trim()
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
