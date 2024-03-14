import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../../model/userModel";

export const postRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password, rpass, number } = req.body;
    // console.log(req.body);
    const existingUser = await UserModel.findOne({email})
    console.log(existingUser);
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await UserModel.insertMany([{
        
          name,
          email,
          password: hashedPassword,
          phone: number,
        
      }]);
      console.log(newUser), "newuser";
      res.status(200).json({ message: "successfully created user" });
    }else{

      res.status(400).json({ message: "user already exists" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal error" });

  }
};
