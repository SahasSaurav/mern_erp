import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
  rollNo:{
    type:String,
    required:true,
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  },
  name:{
    type:String,
    required:true,
    ref:"User"
  },
  email:{
    type:String,
    lowerCase:true,
    ref:'User'
  },
  dob:{
    type:Date,
    required:true,
  },
  semester:{
    type:String,
    required:true,
    enums:['I','II','III','IV','V','VI']
  },
  phone:{
    type:String,
    required:true,
    maxlength:10
  },
  bloodGroup:{
    type:String,
    required:true,
    enums:['A+','A-','B+','B-','O+','O-','AB+','AB-']
  },
  adharNo:{
    type:'String',
    required:true,
    maxlength:12
  },
  nad:{
    type:String,
    required:true
  },
  bankAccount:{
    type:String,
    required:true
  },
  address:{
    street:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    country:{
      type:String,
      required:true
    },
    zipCode:{
      type:String,
      required:true,
      maxlength:6,
    }
  }
})

const Student=mongoose.model('Student',studentSchema);

export default Student;