import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/logo-jamila.png"
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadsetThin } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [nav,setNav] = useState([
    {id:1, label: "HOME", path: "/",state:false },
   
    {id:2, label: "ABOUT", path: "/about",state:false },
    {id:3, label: "SHOP", path: "/shop" ,state:false},
    {id:4, label: "PRICING", path: "/pricing",state:false },
    {id:5, label: "BLOG", path: "/blog" ,state:false},
    {id:6, label: "OUR TEAM", path: "/ourTeam",state:false },
    {id:7, label: "TESTIMONIALS", path: "/testimonial" ,state:false},
    {id:8, label: "FAQ", path: "/faq",state:false },
    {id:9, label: "CONTACT", path: "/contact",state:false },
  ])
  return (
    <div>
      <div className="w-full h-[5vh] bg-[#e4989c] flex justify-center">
        <div className="w-[85%] h-full  flex justify-between">
          <div className="w-[15%] h-full  flex gap-4 items-center">
            <span><TiSocialFacebook className="text-white" /></span>
            <span><IoLogoTwitter  className="text-white"/></span>
            <span><FaInstagram  className="text-white"/></span>
            <span><FaYoutube  className="text-white"/></span>
          </div>
          <div className="w-[40%] h-full  flex items-center justify-center text-white min-w-[768px]">ENJOY FREE SHIPPING ON US ORDERS OVER $50</div>
          <div className="w-[30%] h-full  flex items-center justify-end gap-2 min-w-[768px]">-

            <p className="text-white font-semibold">united states (USD $)</p>
            <span><RiArrowDropDownLine  className="text-white font-semibold size-7"/></span>
          </div>
        </div>
      </div>
      <div className="w-full h-[22vh] ">
        <div className="w-full h-[60%] bg-[#efeeec] flex justify-center border border-b-black">
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
        <div className="w-full h-[40%] flex justify-center bg-[#efeeec]  hidden:min-w-[768px]">
          <div className=" w-[82%] h-full flex items-center justify-between ">
            {
              nav.map(el =>(
                <div className="w-full flex gap-10 font-semibold items-center"
                onMouseEnter={()=> {
               el.state = true
               setNav([...nav])
                }}
                onMouseLeave={()=> {
                  el.state = false
                  setNav([...nav])
                }}
                >
                <Link to={el.path}>{el.label}</Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
