import { prisma } from "../../../prisma";
import MessageResponse from "../../interfaces/MessageResponse";
import RegisterProps from "../../interfaces/RegisterProps";
import { Request, Response } from "express";
import bcrypt from "bcrypt";


export const postRegisterUser = async (
  req: Request<{}, {}, RegisterProps>,
  res: Response<MessageResponse>
) => {
  try {
    console.log("inside postRegisterUser");
    
    const { name, email, password, rpass, number } = req.body;
    console.log(req.body);
    const phone = number; // Assuming number is a string, if not, adjust accordingly
    
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    });

    console.log(existingUser); // Log existingUser to check its value

    if (!existingUser) {
      const hashPassword = await bcrypt.hash(password, 10);
      console.log(hashPassword);
  
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword,
          phone,
        },
      });
     
      res.status(200).json({ message: "Registration successful" });
    } else {
      console.log(existingUser, "User already exists");
      return res.status(400).json({ message: "User already registered" });
    }
    
  } catch (error: any) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};
export const getdata = async (
  req: Request<{}, {}, RegisterProps>,
  res: Response<MessageResponse>
) => {
  try {
    console.log("inside postrefisster");
    
    res.status(200).json({ message: " successful" });
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" });
  }
};


