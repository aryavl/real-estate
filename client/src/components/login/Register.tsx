import { People, Email, LockRounded, PhoneRounded } from "@mui/icons-material";
import styles from "./Register.module.css";
import Navbar from "../User/Navbar";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../api/axios";
import { redirect } from "react-router-dom";
import { useState } from "react";

type FormData = {
    name:string;
    email:string;
    password:string;
    rpass:string;
    number:number;
}
const Register = () => {
    const [errormes,setErrormes] = useState<string>('')
    const schema:ZodType<FormData> = z.object({
        name:z.string().min(2).max(30),
        email:z.string().email(),
        password:z.string().min(5).max(20),
        rpass:z.string().min(5).max(20),
        number:z.number().min(10)
    }).refine((data)=> data.password === data.rpass,{
        message:"Passwords do not match",
        path:["rpass"]
    })
    const {register,handleSubmit,formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)})

    const submitData = async(data:FormData) =>{
        console.log(data,"data reg");
        await registerUser(data)
        if(data?.status===200){
            redirect('/login')
        }else{
            setErrormes("User already registered")
        }
    }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full px-3 mt-2">
        <form onSubmit={handleSubmit(submitData)} action="" className="w-full md:w-[30%] mt-5">
          <h1 className="text-center text-2xl font-bold mb-5">Register</h1>
          {errormes && <span className="text-lg text-red-600">{errormes}</span>}
          <div className="relative flex flex-col ">
            <label htmlFor="name" className="flex items-center">
              <People className="mr-2" />
              Name
            </label>
            <input
              type="text"          
              id="name"
              className={`${styles.finput}`}
              {...register('name')}
            />
            {errors.name && <span className="text-red-600">{errors.name.message}</span>}
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="email" className="flex items-center">
              <Email className="mr-2" />
              Email
            </label>
            <div className="relative flex flex-col">
              <input
                type="text"
                {...register('email')}
                id="email"
                className={`${styles.finput}`}
              />
            {errors.email && <span className="text-red-600">{errors.email.message}</span>}

            </div>
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="password">
            <LockRounded className="mr-2" />
                Password</label>
            <input
              type="password"
              {...register('password')}
              id="password"
              className={`${styles.finput}`}
            />
            {errors.password && <span className="text-red-600">{errors.password.message}</span>}

          </div>
          <div className="relative flex flex-col">
            <label htmlFor="rpass">
            <LockRounded className="mr-2" />
                
                Repeat Password</label>
            <input
              type="password"
              {...register('rpass')}
              id="rpass"
              className={`${styles.finput}`}
            />
            {errors.rpass && <span className="text-red-600">{errors.rpass.message}</span>}

          </div>
          <div className="relative flex flex-col">
            <label htmlFor="number">
            <PhoneRounded className="mr-2" />
                
                Mobile Number</label>
            <input
              type="text"
              {...register('number',{valueAsNumber:true})}
              id="number"
              className={`${styles.finput}`}
            />
            {errors.number && <span className="text-red-600">{errors.number.message}</span>}

          </div>
          <div className="w-full mt-4 mb-4">
            <button   className=" w-full py-3 border borderColor text-[#46ed27] font-bold text-lg hover:scale-105">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
