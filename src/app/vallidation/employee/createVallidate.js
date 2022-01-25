const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schemaEmployees = Joi.object({
      name: Joi.string().min(4).max(50).required(),
      cpf: Joi.string().min(11).max(14).required(),
      office: Joi.string(),
      birthday: Joi.date().format('DD/MM/YYYY').less(Date.now()).required()
    });
    const { error } = await schemaEmployees.validate(req.body, { abortEarly: false });
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