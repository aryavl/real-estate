import {  Email, LockRounded } from "@mui/icons-material";
import Navbar from "../User/Navbar";
import styles from './Login.module.css'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full px-3 mt-5">
        <form action="" className="w-full md:w-[30%] mt-5 border px-6 py-4      ">
          <h1 className="text-center text-2xl font-bold mb-5">Login</h1>

          <div className="flex flex-col">
            <label htmlFor="email">
              <Email className="mr-2"/>
              Email
            </label>
            <input type="text" id="email"className={styles.finput}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              <LockRounded className="mr-2"/>
              Password
            </label>
            <input type="password" id="password" className={styles.finput}/>
          </div>
          <div className="w-full mt-4 mb-4">
            <button   className=" w-full py-3 border borderColor text-[#46ed27] font-bold text-lg hover:scale-105">Register</button>
          </div>
          <div className="text-center">
          <Link to={'/register'} className=" text-gray-600">
            New User? Register Here
          </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
