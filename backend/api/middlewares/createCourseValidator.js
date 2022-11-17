import joi from "joi"
const createCourseSchema = joi.object({
  name: joi.string().required(),
  img: joi.string(),
  description: joi.string().required(),
  introduction: joi.string(),
  subjects: joi.array().items(joi.string()).required(),
  teachers: joi.array().items(joi.string()),
})


export default async (req, res, next) => {
  try {
    await createCourseSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Validation error',
      error
    })
  }}