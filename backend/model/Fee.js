import mongoose from 'mongoose'

const feeSchema=mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  },
  isPaid:{
    type:Boolean,
    default:false,
    required:true
  },
  paidAt:{
    type:Date
  },
  paymentMode:{
    type:String,
    required:true,
  },
  amount:{
    type:Number,
    required:true
  },
  semester:{
    type:String,
    required:true,
    enums:['I','II','III','IV','V','VI']
  }
},{
  timeStamps:true
})

const Fee=mongoose.model('Fee',feeSchema)

export default Fee;