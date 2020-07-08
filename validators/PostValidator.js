const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      body: Joi.string().required(),
      image: Joi.string(),
      date: Joi.date(),
      permissions: Joi.string().valid('PUBLIC', 'PRIVATE'),
    }),
  }),
};
