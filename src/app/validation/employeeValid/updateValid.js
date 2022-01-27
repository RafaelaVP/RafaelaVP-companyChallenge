const Joi = require('joi');
const BadRequest = require('../../errors/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50).trim(),
      cpf: Joi.string().min(11).max(11).trim(),
      office: Joi.string().valid('gerente', 'vendedor', 'caixa').trim(),
      situation: Joi.string().valid('activate', 'deactivate').trim(),
      birthday: Joi.date().less(Date.now()).trim()
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
