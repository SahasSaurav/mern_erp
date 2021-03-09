import path from 'path';
import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import xss from 'xss-clean'
import hpp from 'hpp'
import cors from 'cors'
import rateLimit from 'express-rate-limit'

import connectDb from './config/db.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import authRoute from './routes/authRoutes.js';
import userRoute from './routes/userRoutes.js';

// initializing dotenv file
dotenv.config();

//initializing the database connection
connectDb()

const app = express();

// body parser middleware to parse json data
app.use(express.json({limit:'200kb'}));
// to parse cookie 
app.use(cookieParser())
// api logger in development mode
if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'))
}
// set security headers
app.use(helmet())
// Enable CORS
app.use(cors())
// Sanitize data
app.use(mongoSanitize())
//prevent xss attacks
app.use(xss())
// Prevent http param pollution
app.use(hpp())
// Rate limiting to prevent brute forse attack
const limiter= rateLimit({  
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:{
    success: false,
    status:429,
    message:'Too many requests from this IP, please try again in an hour!',
  }
   
})
app.use(limiter)

app.get("/", (req, res) => {
  res.send("hello");
});
app.use('/auth',authRoute)
app.use('/user',userRoute)


app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
);
