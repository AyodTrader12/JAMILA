import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
const HeaderA = () => {
  return (
    <div>
        <div className="w-full h-[5vh] bg-[#e4989c] flex justify-center">
        <div className="w-[80%] h-full  flex justify-between bg-slate-500 max-sm:justify-center ">
          <div className="w-[15%] h-full  flex gap-4 items-center  max-sm:">
            <span><TiSocialFacebook className="text-white" /></span>
            <span><IoLogoTwitter  className="text-white"/></span>
            <span><FaInstagram  className="text-white"/></span>
            <span><FaYoutube  className="text-white"/></span>
        </div>
          <div className="w-[35%] h-full  md:flex items-center justify-center text-white  bg-black hidden">ENJOY FREE SHIPPING ON US ORDERS OVER $50</div>
          <div className="w-[18%] h-full  flex items-center justify-end gap-2 bg-red-600 max-sm:hidden">
            <p className="text-white font-semibold ">united states (USD $)</p>
            <span><RiArrowDropDownLine  className="text-white font-semibold size-7"/></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeaderA