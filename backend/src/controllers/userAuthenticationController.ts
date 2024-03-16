import { Request, Response } from "express";

export const postRegister = async(req:Request,res:Response)=>{
    try {
        console.log("hello post");
        
    } catch (error) {
        res.status(500).json({message:"Internal Error"})
    }
}