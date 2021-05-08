import User from "../model/User.js";
import { createSignInToken } from "../utils/jwtToken.js";
import { addUserSchema } from "../utils/validation.js";

const addUser = async (req, res, next) => {
  try {
    const result = await addUserSchema.validateAsync({ ...req.body });
    console.log({result})
    const { email, name, password } = result;
    const userDoesExist = await User.findOne({ email });
    console.log({userDoesExist})
    if (userDoesExist) {
      res.status(401);
      throw new Error("Another user already exist with this email ");
      return;
    }

    const user = await User.create({ name, email,password });
    console.log(user)
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

//get data from user and student model
// const getUser=(req,res,next)=>{
//   try{
//     const {id}=req.params
//     const  user=User.findById({_id:id});
//     if(!user){
//       res.status(404)
//       throw new Error('User does not exist')
//       return
//     }else{
//       await user.remove()
//       res.json(user)
//     }
//   }catch(err){
//     next(err)
//   }
// }

const updateUserInfo=async(req,res,next)=>{
  try{
    const {id}=req.params;
    const {name,dob,phone,semester,bloodGroup,addharNo,nad,bankAccount}=req.body
    // const {}=req.body
    // const {}=req.body
  }catch(err){
    next(err)
  }
}

const deleteUser=async(req,res,next)=>{
  try{
    const {id}=req.params
    const  user=User.findById({_id:id});
    if(!user){
      res.status(404)
      throw new Error('User does not exist')
      return
    }else{
      await user.remove()
      res.json({message:'User removed'})
    }
  }catch(err){
    next(err)
  }
}

const uploadPhoto=async(req,res,next)=>{
  try{
    const {id}=req.params
    const {profilePic}=req.body
    const  user=User.findById({_id:id});
    if(!user){
      res.status(404)
      throw new Error('User does not exist')
      return
    }else{
      user.profilePic=profilePic
      await user.save()
      res.json({message:'User removed'})
    }
  } catch (err) {
    next(err)
  }
}

export { addUser,deleteUser,uploadPhoto };
