// abrindo pr
const Joi = require('joi');

const characterDTO = Joi.object({
  name: Joi.string().min(5).required(),
});

const validateBody = (req, res, next) => {
  const { error } = characterDTO.validate(req.body);
  // console.log(error);
  if (!error) {
    return next();
  }
  // const { message } = error.details[0];
  if (error.message.includes('required')) {
    return res.status(400).json({ message: '"name" is required' });
  }
  /* if (req.body === {}) {
    return res.status(400).json({ message: '"name" is required' });
  } */
  return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
};

module.exports = validateBody;