const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../errors/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50).trim().required(),
      cpf: Joi.string().min(11).max(11).trim().required(),
      office: Joi.string().valid('gerente', 'vendedor', 'caixa').trim().required(),
      birthday: Joi.date().format('DD/MM/YYYY').less(Date.now()).required()
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
