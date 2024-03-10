import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import {PrismaClient} from '@prisma/client'
import * as middlewares from './middlewares';

import MessageResponse from './interfaces/MessageResponse';
import registerRoute from './routes/login/registerRoute';

require('dotenv').config();

const app = express();
const prisma = new PrismaClient()
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});


// async function main() {
//   const users= await prisma.user.findUnique({
//     where:{
//       email:"bdsfa@gmail.com"
//     }
//   })
//   if(!users){
//     console.log("non existing");
    
//   }
//   console.log(users);
  
// }
// main()
// app.get('/users',async(req:Request,res:Response)=>{
//   const users= await prisma.user.findMany()
//       res.json({messge:"users",users})
// })
// app.post('/api/register',async(req:Request,res:Response)=>{
//   const users= await prisma.user.findMany()
//   //       res.json({messge:"users",users})
//   console.log(users);
   
//   res.json({message:"success "})

   
// })
app.use('/api/register',registerRoute)
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
