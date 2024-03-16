import db from "../database/config";
import mongoose, { Document, Schema } from "mongoose";

interface UserDocument extends Document {
    name?: string;
    email: string;
    password?: string;
    phone?: string;
    location?: string;
    emailVerified?: Date;
    image?: string;
    refresh_token?: string;
    access_token?: string;
    expires_At?: Date;
    token_type?: string;
    id_token?: string;
    session_state?: string;
    properties?: [];
   role:string
  }
  
const UserSchema = new Schema<UserDocument>({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    phone:{
        type:String
    },
    location:String,
    emailVerified:Date,
    image:String,
    refresh_token:String,
    access_token:String,
    expires_At:Date,
    id_token:String,
    session_state:String,
    properties:[{
        type:mongoose.Schema.Types.ObjectId
    
}],
role:{
    type:String,
    default:"user"
}
},{
    timestamps:true
})

const UserModel = db.model("User",UserSchema)

export default UserModel