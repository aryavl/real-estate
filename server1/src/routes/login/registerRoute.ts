import express from 'express'
import { postRegister } from '../../controllers/login/registerController'

const registerRoute = express.Router()


registerRoute.post('/',postRegister)
export default registerRoute