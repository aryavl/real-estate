import gsap from "gsap";
import React, { useEffect } from "react";
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  useEffect(() => {
    gsap.to(".logo", {
      y: 20,
      duration: 1,
      repeat: 1,
      yoyo: true,
    });
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center w-[80%] mx-auto  logo">
        <div className="w-20 object-cover">
          <img src="/images/log.png" className="" />
        </div>
        <div>
          <button className="border borderColor px-6 py-2 hover:scale-105 transition ease-out">
            Post your Property
          </button>
        </div>
        <div className="hidden">
          <button className="hidden"></button>
        </div>
      </div>
      <div className="navBg">
      <nav className="md:flex justify-between items-center w-[80%] mx-auto py-4 hidden ">
            <ul className="flex items-center gap-4">
                <li>Home</li>
                <li>Home Loan</li>
                <li>Construction</li>
            </ul>
            <div>
                <button className="flex items-center gap-3">
                    <LoginIcon/>
                    Log In/Register</button>
            </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
