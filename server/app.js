import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./db/mongodb.js"
import users from "./routes/users.routes.js"
dotenv.config()

const app = express()


app.use(cors())

app.use(express.json())

app.get('/' , (req , res )=>{
    res.json({messege : "API is running"})
})

app.use("/users" , users)
const PORT = process.env.port

app.listen(PORT , ()=>{
    connectDB()
    console.log("Server is runing on port 8000");
})