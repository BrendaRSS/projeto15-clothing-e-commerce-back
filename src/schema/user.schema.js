import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "br"]}}).required(),
  password: Joi.string().min(4).required(),
  confirm_password: Joi.ref("password"),
  cpf: Joi.string().min(11).max(11).required(),
  birth_year: Joi.number().integer().min(1900).max(2008).required(),
})