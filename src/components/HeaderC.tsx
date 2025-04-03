import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
const HeaderC = () => {

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
  )
}

export default HeaderC