import React from 'react'
import pix from "../assets/login.png"
import pix1 from "../assets/logo-jamila.png"
const login = () => {
  return (
    <div>
        <div className='w-full h-screen flex gap-5'>
            <div className='w-[55%] h-full border bg-[#f5dfe0] flex justify-end'>
                <div className='w-[85%] h-full '>
                    <img src={pix} alt="image" className='h-[99%]' />
                </div>
            </div>
            <div className='w-[45%] h-full  flex items-center justify-center'>
              <div className='w-[90%] h-[90%] '>
                <div className='h-[10%] w-full flex items-center justify-center mb-16'>
                    <img src={pix1} alt="image" className='h-[90%]' />
                </div>
                <div className='w-full h-[15%]  flex items-center justify-center'>
                    <div className='w-[20%] h-[75%] flex gap-3 flex-col items-center'>
                        <div className='w-[50%] h-[1px] bg-[#e3b0c2]'></div>
                        <div className='text-[#e3b0c2] font-semibold text-center'>LOGIN</div>
                        <div className='w-[50%] h-[1px] bg-[#e3b0c2]'></div>
                    </div>
                    
                </div>
                <h1 className='text-[60px] font-serif text-center'>Welcome Back!</h1>
                <p className='text-center mt-5 font-sans text-[20px]'>please enter your details</p>
                <div className='w-full h-[25%]  flex items-center justify-center mt-5'>
                    <div className='w-[75%] h-[80%] '>
                        <input type="text"  className='bg-slate-200 border outline-none h-[55px] rounded-md w-full p-2 mb-4'/>
                        <input type="text"  className='bg-slate-200 border outline-none h-[55px] rounded-md w-full p-2'/>
                    </div>
                </div>
                <div className='w-full h-[15%]  flex items-center justify-center'>
                    <button className='text-white font-bold bg-[#e4989c] h-[85px] w-[550px] rounded-full'>LOG IN</button>
                </div>
                <p className='text-[#e4989c] font-semibold ml-20 cursor-pointer
                '>Lost your password?</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default login