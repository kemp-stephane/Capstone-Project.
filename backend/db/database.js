import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

// Initial connection to db and error handling if initial connection fails
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected to the database"))
.catch(err=>console.log(err))

