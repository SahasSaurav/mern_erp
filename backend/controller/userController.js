import User from "../model/User.js";
import { createSignInToken } from "../utils/jwtToken.js";
import { addUserSchema } from "../utils/validation.js";


const addUser = async (req, res, next) => {
  try {
    const result = await addUserSchema.validateAsync({ ...req.body });
    const { email, name, password } = result;
    const userDoesExist = await User.findOne({ email });
    if (userDoesExist) {
      res.status(401);
      throw new Error("Another user already exist with this email ");
      return;
    }

    const user = await User.create({ name, email,password });
    const signInToken = await createSignInToken(user);

    const signinLink = `${req.protocol}://${req.get(
      "host"
    )}/auth/register/${user.id.toString()}/${signInToken}`;
    console.log({signinLink})

    res.json({message:"link send"})

    // send signIn  link to user email address



  } catch (err) {
    if (err.isJoi === true) res.status(400);
    next(err);
  }
};



export { addUser };
