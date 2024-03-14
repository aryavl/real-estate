import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoute from './routes/authentication/userRouter';
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials:true,
origin:"http://localhost:5173"
}))

app.use('/api',userRoute)

app.listen(port,()=>{
    console.log(`server connected to ${port}`);
    
})