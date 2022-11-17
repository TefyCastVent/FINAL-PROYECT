import joi from "joi"
const loginUserSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
})
export default async(req, res, next) => {
    try {
        await loginUserSchema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: 'Validation error',
            error
         })
     }
}