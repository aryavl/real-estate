import mongoose from "mongoose";
const dbUrl = process.env.DATABASE_URL || ""

const db = mongoose.createConnection(dbUrl)

db.on("connected",()=>{

    console.log("connected to mongodb");
    
})

db.on("error",(error)=>{
    console.error("MongoDB connection error:", error);
    
})

export default db