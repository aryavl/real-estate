import { postRegister } from '../../controllers/userAuthenticationController'
import express from 'express'

 const userRoute = express.Router()
 userRoute.post('/register',postRegister)

 export default userRoute