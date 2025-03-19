import React from 'react'
import image from "../assets/team-sect.jpeg"
import Product from '../components/product'
import pix5 from "../assets/banner-first-collection (1).jpeg"
import pix from "../assets/product-5-249x300.jpeg"
import pix2 from "../assets/product-6-300x300.jpeg"
import pix3 from "../assets/product-7-300x300.jpeg"
import pix4 from "../assets/product-8-249x300.jpeg"
import pix6 from "../assets/about-600x395.jpeg"
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
      <Product/>
      {/* collection section */}
      <div className='w-full h-[80vh] mt-20 bg-slate-900'>
   <div style={{
    width:"100%",
    height:"100%",
    backgroundImage:`url(${pix5})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:"cover",
    backgroundPosition:"center"

   }}></div>
      </div>
      <div className='w-full h-[18vh]  flex items-end justify-center'>
        <div className='w-[8%] h-[40%]  flex gap-3 flex-col items-center'>
        <div className='w-[40%] h-[1px] bg-[#e3b0c2]'></div>
                        <div className='text-[#e3b0c2] font-semibold text-center text-[15px]'>BEST SELLER</div>
                        <div className='w-[40%] h-[1px] bg-[#e3b0c2]'></div>
        </div>
      </div>
      <div className='w-full h-[25vh] '>
        <p className='font-serif text-[70px] text-center '>Our Best Sellers</p>
        <p className='font-sans text-[20px] text-center mt-2 text-gray-500'>Lorem ipsum dolor sit amet consec contes quisque urna molestie tincidunt aliquet<br/> quam. Imperdiet at pellent esque vitae aliquet tempor eget rutrum tellus.</p>
      </div>
      <Product/>
      <div className='w-full h-[53vh]  flex justify-center mt-10'>
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
      {/* pagination */}
      <div className='w-full h-[90vh] bg-[#111111] mt-20 flex gap-14'>
        <div className=' h-full w-[60%] flex items-end'>
          <img src={pix6} alt="about" className='h-[85%] w-full object-cover object-center' />
        </div>
        <div className='h-[85%] mt-28 w-[35%]'>
        <div className='w-full h-[5vh]   '>
        <div className='w-[8%] h-[40%]  flex gap-3 flex-col bg-white'>
        <div className='w-[40%] h-[1px] bg-[#e3b0c2]'></div>
                        <div className='text-[#e3b0c2] font-semibold  text-[15px]'>ABOUT</div>
                        <div className='w-[40%] h-[1px] bg-[#e3b0c2]'></div>
        </div>
      </div>
      
        <p className='font-serif text-[70px] text-white '>Empower &<br/>inspire</p>
        <p className='font-sans text-[20px]  mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur.<br/> Montes quisque urna molestie tincidunt aliquet<br/> quam. Imperdiet at pellent esque vitae aliquet<br/> tempor eget rutrum tellus. Leo a luctus vitae.</p>
      <p className='text-white font-bold mt-5 text-[25px] mb-7'>From the bottom of our hearts, thank<br/> you!</p>
      <button className='w-[220px] h-[75px] bg-[#f986ae] rounded-full text-white font-bold hover:animate-bounce transition-700'>LEARN MORE</button>
        </div>
      </div>
      <div className='w-full h-[70vh] bg-slate-500 mt-28'></div>
    </div>
  )
}

export default HomeScreen