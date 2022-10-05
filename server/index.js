import express from "express";
import mongoose from "mongoose";
import cors from 'cors'//eleminates cross origin issues
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

import dotenv from 'dotenv'


const app=express();//server

dotenv.config();
app.use(express.json({limit: "30mb",extended: true}))
app.use(express.urlencoded({limit: "30mb",extended: true}))
app.use(cors());//it raises error in servers of client and server communication

app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone")
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)


const PORT = process.env.PORT || 5000 //getting port from environment if not available it will take 5000
// const CONNECTION_URL="mongodb+srv://chandu:chandu@cluster0.vtm8bgc.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
    .catch((err)=>console.log(err.message))
