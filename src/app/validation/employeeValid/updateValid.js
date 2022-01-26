const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).max(50),
      cpf: Joi.string().min(11).max(14),
      office: Joi.string().valid('gerente', 'vendedor', 'caixa'),
      situation: Joi.string().valid('activate', 'deactivate'),
      birthday: Joi.date().less(Date.now())
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        description: detail.message,

        name: detail.path.join('.')
      }))
    );
  }
};
