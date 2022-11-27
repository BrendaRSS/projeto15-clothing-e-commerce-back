import Joi from "joi";

export const categorySchema = Joi.object({
  category: Joi.string().min(4).required()
})