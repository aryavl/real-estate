import express, { Request, Response } from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import { getdata, postRegisterUser } from '../controller/login/loginController';
import RegisterProps from '../interfaces/RegisterProps';

const router = express.Router();
// router.get<{}, MessageResponse>('/', (req, res) => {
//     res.json({
//       message: 'HI Arya',
//     });
//   });
type RegisterRequestHandler = (req: Request<{}, {}, RegisterProps>, res: Response<MessageResponse>) => Promise<void>;
router.post('/register',postRegisterUser as RegisterRequestHandler);
router.post('/test',(req,res)=>{
    console.log(req.body);
    res.json({message:req.body})
    
})
export default router;
