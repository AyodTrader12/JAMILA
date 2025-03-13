import React from 'react'
import pix from "../assets/login.png"
const login = () => {
  return (
    <div>
        <div className='w-full h-screen flex gap-5'>
            <div className='w-[55%] h-full border bg-[#f5dfe0] flex justify-end'>
                <div className='w-[85%] h-full '>
                    <img src={pix} alt="image" className='h-[99%]' />
                </div>
            </div>
            <div className='w-[45%] h-full bg-slate-600 flex items-center justify-center'>
              <div className='w-[90%] h-[90%] bg-slate-50'></div>
            </div>
        </div>
    </div>
  )
}

export default login