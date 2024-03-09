/* eslint-disable no-useless-catch */
import axios from "axios";
import { baseUrl } from "../utilis/getApiUrl";

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
        const response = await axios.post(`${baseUrl}/api/register`,userData)
        return response.data
    } catch (error:unknown) {
        throw error
    }
}