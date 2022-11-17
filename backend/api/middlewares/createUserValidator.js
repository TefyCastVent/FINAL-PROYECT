import joi from "joi"
let options = ['Administrator', 'Teacher', 'Student'];
const createUserSchema = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  role: joi.string().valid(...options),
  //Si el role = teacher validamos lo demás
  photo: joi.string() ,
  description: joi.alternatives().conditional('role', { is: 'Teacher', then: joi.string().required() }),
  whatsAppNumber: joi.alternatives().conditional('role', { is: 'Teacher', then: joi.string().required() }),
  schedule: joi.alternatives().conditional('role', { is: 'Teacher', then: joi.string().required() })
})


export default async (req, res, next) => {
  try {
    await createUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Validation error',
      error
    })
  }}