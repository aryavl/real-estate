/* eslint-disable no-useless-catch */
import axios from "axios";
import { baseUrl } from "../utilis/getApiUrl";
const localBaseUrl = 'http://localhost:5000'
export default axios.create({
    baseURL:`${baseUrl}`
})

// register new user
type FormData = {
    name:string;
    email:string;
    password:string;
    rpass?:string;
    number:number;
}
export const registerUser = async(userData:FormData)=>{
    try {
        const response = await axios.post(`${localBaseUrl}/api/register`,userData)
       console.log(response);
       
        return response
    } catch (error:unknown) {
        throw error
    }
}