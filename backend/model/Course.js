import mongoose from 'mongoose';

const courseSchema=mongoose.Schema({
  code:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  department:{
    type:String,
    required:true,
    enums:['BCA',"BBA"]
  },
  semester:{
    type:String,
    required:true,
    enums:['I','II','III','IV','V','VI']
  },
  credit:{
    type:Number,
    required:true,
  }
})

const Course=mongoose.model('Course',courseSchema)

export default Course;