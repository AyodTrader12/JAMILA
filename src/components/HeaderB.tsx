import React from 'react'
import logo from "../assets/logo-jamila.png"
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadsetThin } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
const HeaderB = () => {
  return (
    <div>
         <div className="w-full h-[12vh] ">
        <div className="w-full h-full bg-[#efeeec] flex justify-center border border-b-black">
          <div className=" w-[83%] h-full  flex justify-between">
            <div className="w-[20%] h-full  flex items-center">
              <img src={logo} alt="image"  className="w-full"/>
            </div>
            <div className="w-[50%] h-full  flex justify-between">
              <div className="w-[30%] h-full  flex items-center justify-center gap-2">
                <span><TbTruckDelivery /></span>
                <p className="font-bold text-[20px]">Track order</p>
              </div>
              <div className="w-[30%] h-full flex justify-center items-center gap-2">
                <span><PiHeadsetThin /></span>
                <p className="font-bold text-[18px]">(+021) 345 678 910</p>
              </div>
              <div className="w-[30%] h-full  flex  gap-8 items-center">
                <span><FaSearch /></span>
                <Link to={"/login"}> <span><CgProfile /></span></Link>
                <p>$0</p>
                <span><IoBag /></span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderB