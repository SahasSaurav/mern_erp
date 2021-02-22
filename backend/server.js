import path from 'path';
import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import connectDb from './config/db.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import authRoute from './routes/authRoutes.js';
import userRoute from './routes/userRoutes.js';

// initializing dotenv file
dotenv.config();

//initializing the database connection
connectDb()

const app = express();

// body parser middleware
app.use(express.json());
app.use(cookieParser())
if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'))
}

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
