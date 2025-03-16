import React from 'react'
import pix from "../assets/product-1-300x300.jpeg"
import pix2 from "../assets/product-2-300x300.jpeg"
import pix3 from "../assets/product-3-300x300.jpeg"
import pix4 from "../assets/product-4-300x300.jpeg"
const product = () => {
  return (
    <div>
        <div className='w-full h-[53vh]  flex justify-center'>
        <div className='w-[80%] h-full  flex gap-5'>
          <div className='w-[25%] h-full '>
            <div className='w-full h-[70%]'>
              <img className='w-full h-full cursor-pointer ' src={pix} alt='product'/>
            </div>
            <p className='font-sans text-[22px] text-center mt-2 cursor-pointer'>Cape Town Garden Hijab</p>
         <p className='font-bold text-[#e88186] text-[23px] underline text-center mb-2 cursor-pointer'>$23</p>
         <button className='uppercase font-semibold text-white bg-[#e88186] w-[200px] h-[45px] rounded-full ml-14'>Add to cart</button>
          </div>
          <div className='w-[25%] h-full '>
            <div className='w-full h-[70%]'>
              <img className='w-full h-full cursor-pointer ' src={pix2} alt='product'/>
            </div>
            <p className='font-sans text-[22px] text-center mt-2 cursor-pointer'>Cape Town Garden Hijab</p>
         <p className='font-bold text-[#e88186] text-[23px] underline text-center mb-2 cursor-pointer'>$23</p>
         <button className='uppercase font-semibold text-white bg-[#e88186] w-[200px] h-[45px] rounded-full ml-14'>Add to cart</button>
          </div>
          <div className='w-[25%] h-full '>
            <div className='w-full h-[70%]'>
              <img className='w-full h-full cursor-pointer ' src={pix3} alt='product'/>
            </div>
            <p className='font-sans text-[22px] text-center mt-2 cursor-pointer'>Cape Town Garden Hijab</p>
         <p className='font-bold text-[#e88186] text-[23px] underline text-center mb-2 cursor-pointer'>$23</p>
         <button className='uppercase font-semibold text-white bg-[#e88186] w-[200px] h-[45px] rounded-full ml-14'>Add to cart</button>
          </div>
          <div className='w-[25%] h-full '>
            <div className='w-full h-[70%]'>
              <img className='w-full h-full cursor-pointer ' src={pix4} alt='product'/>
            </div>
            <p className='font-sans text-[22px] text-center mt-2 cursor-pointer'>Cape Town Garden Hijab</p>
         <p className='font-bold text-[#e88186] text-[23px] underline text-center mb-2 cursor-pointer'>$23</p>
         <button className='uppercase font-semibold text-white bg-[#e88186] w-[200px] h-[45px] rounded-full ml-14'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default product