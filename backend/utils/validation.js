import joi from "joi";

const registerSchema = joi
  .object({
    email: joi
      .string()
      .email()
      .lowercase()
      .required()
      .label("Email")
      .trim()
      .messages({
        'string.base': `Email should be a type of text`,
        'string.empty': `Email cannot be an empty field`,
        'any.required': `Email  is a required field`,
        'string.email': `Email must be valid email address`
      }),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .required()
      .label("Password")
      .trim()
      .messages({
        'string.base': `Password should be a type of text`,
        'string.empty': `Password cannot be an empty field`,
        'any.required': `Password  is a required field`,
        'string:min': 'Password must have atleast 8 characters',
        'string.pattern.base': 'Password must contain atleast one uppercase and lower  alphabet and digit and special character like [#?!@$%^&*-]',
      }),
    repeatPassword: joi
      .required()
      .valid(joi.ref("password"))
      .error(() => new Error('Confirm Password must match to the password'))
      .label("Confirm Password"),

  })
  .options({ abortEarly: false });

const loginSchema = joi
  .object({
    email: joi
      .string()
      .email()
      .lowercase()
      .required()
      .label("Email")
      .trim()
      .messages({
        'string.base': `Email should be a type of text`,
        'string.empty': `Email cannot be an empty field`,
        'any.required': `Email  is a required field`,
        'string.email': `Email must be valid email address`
      }),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .required()
      .label("Password")
      .trim()
      .min(8)
      .messages({
        'string.base': `Password should be a type of text`,
        'string.empty': `Password cannot be an empty field`,
        'any.required': `Password  is a required field`,
        'string:min': 'Password must have atleast 8 characters',
        'string.pattern.base': 'Password must contain atleast one uppercase and lower alphabet and special character like [#?!@$%^&*-]',
      }),
  })
  .options({ abortEarly: false })

const addUserSchema = joi
  .object({
    name: joi
      .string()
      .required()
      .label("Name")
      .trim()
      .messages({
        'string.base': `Name should be a type of text`,
        'string.empty': `Name cannot be an empty field`,
        'any.required': `Name  is a required field`,
      }),
    email: joi
      .string()
      .email()
      .lowercase()
      .required()
      .label("Email")
      .trim()
      .messages({
        'string.base': `Email should be a type of text`,
        'string.empty': `Email cannot be an empty field`,
        'any.required': `Email  is a required field`,
        'string.email': `Email must be valid email address`
      }),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .required()
      .label("Password")
      .trim()
      .min(8)
      .messages({
        'string.base': `Password should be a type of text`,
        'string.empty': `Password cannot be an empty field`,
        'any.required': `Password  is a required field`,
        'string:min': 'Password must have atleast 8 characters',
        'string.pattern.base': 'Password must contain atleast one uppercase and lower alphabet and special character like [#?!@$%^&*-]',
      }),
  })
  .options({ abortEarly: false });

const forgotPasswordSchema = joi
  .object({
    email: joi
      .string()
      .email()
      .lowercase()
      .required()
      .label("Email")
      .trim()
      .messages({
        'string.base': `Email should be a type of text`,
        'string.empty': `Email cannot be an empty field`,
        'any.required': `Email  is a required field`,
        'string.email': `Email must be valid email address`
      }),
  })
  .options({ abortEarly: false });

const resetPasswordSchema = joi
  .object({
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .required()
      .label("Password")
      .trim()
      .min(8)
      .messages({
        'string.base': `Password should be a type of text`,
        'string.empty': `Password cannot be an empty field`,
        'any.required': `Password  is a required field`,
        'string:min': 'Password must have atleast 8 characters',
        'string.pattern.base': 'Password must contain atleast one uppercase and lower alphabet and special character like [#?!@$%^&*-]',
      }),
    repeatPassword: joi
      .required()
      .valid(joi.ref("password"))
      .error(() => new Error('Confirm Password must match to the password'))
      .label("Confirm Password"),
  })
  .options({ abortEarly: false });

export {
  registerSchema,
  loginSchema,
  addUserSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
};
