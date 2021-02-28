import crypto from 'crypto';
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// creating the user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select:false,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    profilePic:{
      type:String,
    },
    refreshToken:{
      type:String,
      default:undefined
    }
  },
  { timestamps: true }
);

//method to hash the password before saving to the db 
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
     return next();
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (err) {
    next(err);
  }
});

// method the encrypt the refesh token before saving to the db
userSchema.pre('save',async function(next){
  try{
  if(!this.isModified('refreshToken')){
    return next()
  }
  // encrypting the referesh token 
  const encryptRefreshToken= crypto
    .createHash('sha256')
    .update(this.refreshToken)
    .digest('hex');
  this.refreshToken=encryptRefreshToken;
  }catch(err){
    next(err)
  }
})

// method tto verify the whether entered password matches with user password at db
userSchema.methods.isValidPassword = async function (enteredPassword,userPassword) {
  try {
    return await bcrypt.compare(enteredPassword, userPassword);
  } catch (err) {
    throw err;
  }
};

// creating the user model
const User = mongoose.model("User", userSchema);

export default User;
