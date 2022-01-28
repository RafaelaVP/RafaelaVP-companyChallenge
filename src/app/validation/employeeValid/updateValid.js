const Joi = require('joi');
const BadRequest = require('../../errors/BadRequest');
const { enumOffice } = require('../../utils/enum');
const { enumSituation } = require('../../utils/enum');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50).trim(),
      office: Joi.string()
        .valid(...enumOffice)
        .trim()
        .required(),
      situation: Joi.string()
        .valid(...enumSituation)
        .trim()
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
