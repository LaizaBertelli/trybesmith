import Joi from 'joi';

const LoginSchema = Joi.object({
  username: Joi.string().required().messages({ 'any.required': 'Username is required' }),
  password: Joi.string().required().messages({ 'any.required': 'Password is required' }),
});

export default LoginSchema;