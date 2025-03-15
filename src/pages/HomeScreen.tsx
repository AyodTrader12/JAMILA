import React from 'react'
import image from "../assets/team-sect.jpeg"

const HomeScreen = () => {
  return (
    <div >
      {/* hero page */}
      <div className='w-full h-[90vh]'>
        <div style={{
          height:"100%",
          width:"100%",
          backgroundImage:`url(${image})`,
          backgroundRepeat:'no-repeat'
          , backgroundSize:'cover',
          backgroundPosition:''
        }}>
          <div className='bg-black opacity-50 w-full h-full flex items-center'>
            <div className='w-[40%] h-[70%]  ml-36'>
              <h1 className='text-[70px] font-serif text-white'>
                Summer Clearance Events Extra
              </h1>
              <p className='text-[80px] font-serif text-[#fbb5a4]'>
               30% OFF
              </p>
              <p className='mt-7 text-white font-sans text-[25px]'>Up to 80% off sitewide with items as low as $5.99. While items last.
              </p>
              <button className='text-lg font-bold text-white bg-[#f75159] rounded-full px-10 py-3 mt-7 uppercase h-[65px]'>
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* new product section */}
      <div className='w-full h-[18vh]  flex items-end justify-center'>
        <div className='w-[8%] h-[40%]  flex gap-3 flex-col items-center'>
        <div className='w-[40%] h-[1px] bg-[#e3b0c2]'></div>
                        <div className='text-[#e3b0c2] font-semibold text-center text-[15px]'>NEW PRODUCT</div>
                        <div className='w-[40%] h-[1px] bg-[#e3b0c2]'></div>
        </div>
      </div>
      <div className='w-full h-[25vh] '>
        <p className='font-serif text-[70px] text-center '>Shop New Hijabs</p>
        <p className='font-sans text-[20px] text-center mt-2 text-gray-500'>Lorem ipsum dolor sit amet consec contes quisque urna molestie tincidunt aliquet<br/> quam. Imperdiet at pellent esque vitae aliquet tempor eget rutrum tellus.</p>
      </div>
      <div className='w-full h-[50vh] bg-slate-400 flex justify-center'>
        <div className='w-[80%] h-full bg-slate-50'></div>
      </div>
    </div>
  )
}

export default HomeScreen