import express,{Express, Request, Response} from 'express'
import cors from 'cors'
const app:Express = express()
const port = 3020

app.use(cors())

app.get('/',(req:Request,res:Response)=>{
    res.json({name:"Lekshmi"})
})
app.listen(port, ()=>{
    console.log(`connected successfully on port ${port}`);
    
})