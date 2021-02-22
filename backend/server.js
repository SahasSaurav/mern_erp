import path from 'path';
import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoutes.js';

import connectDb from './config/db.js'

// initializing dotenv file
dotenv.config();

//initializing the database connection
connectDb()

const app = express();

// body parser middleware
app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("hello");
});
app.use('/auth',authRoute)

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
);
