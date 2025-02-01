import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import postRoutes from './routes/postRoutes.js'


dotenv.config()

const app = express()


// middleware

app.use(express.json())
app.use(cors())

app.use("/uploads",express.static("uploads"))   // serve image statically 

// connect to mongodb 
connectDb()


// routes
app.use('/api/posts',postRoutes)

// server start

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))

