import joi from "joi";

const userSchema = joi.object({
  name: joi.string().required().label("Name").trim(),
  email: joi.string().email().lowercase().required().label("Email").trim(),
  password: joi
    .string()
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      )
    )
    .required()
    .label("Password")
    .trim(),
  repeatPassword: joi
    .string()
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      )
    )
    .required()
    .trim()
    .valid(joi.ref("password"))
    .label("Confirm Password"),
  role: joi.string().valid("user", "admin").label("User Role"),
});

const registerSchema = joi
  .object({
    name: joi.string().required().label("Name").trim(),
    email: joi.string().email().lowercase().required().label("Email").trim(),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .required()
      .label("Password")
      .trim(),
  })
  .options({ abortEarly: false });

const loginSchema = joi
  .object({
    email: joi.string().email().lowercase().required().label("Email").trim(),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .required()
      .label("Password")
      .trim(),
  })
  .options({ abortEarly: false });

export { registerSchema, loginSchema };
