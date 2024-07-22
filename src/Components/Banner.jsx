import React from 'react'
import banner from '/Banner-img/banner.png'
import chickenBrg from '/Banner-img/chicken-burger.png'
import vegBrg from '/Banner-img/veggie-burger.png'

const Banner = () => {
  return (
    <div className='bg-banner-color'>
        <div className='section-container '>
            <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                {/* Right-image section */}
                <div className="md:w-1/2 items-center justify-center">
                    <img src={banner} alt="banner image" className='items-center justify-center'/>

                    <div  className='flex flex-col md:flex-row items-center justify-around -mt-5 ml-10 gap-4' >
                        <div className='sm:flex w-3/4 items-center gap-3 bg-white py-2 px-3 rounded-2xl shadow-xl w-68'>
                            <img src={chickenBrg} alt="chicken-burger" className='rounded-2xl'/>
                            <div className='space-y-1'>
                                <h5 className='font-semibold'>Chicken Burger</h5>
                                <div className="rating rating-sm sm:rating-xs">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" defaultChecked readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                </div>
                                <p className='font-semibold'><span className='text-red-700 text-sm'>$</span>21.00</p>
                            </div>
                        </div>
                        <div className='sm:flex w-3/4 hidden items-center gap-3 bg-white py-2 px-3 rounded-2xl shadow-xl w-68'> 
                            <img src={vegBrg}  alt="veggie-burger" className='rounded-2xl' />
                            <div className='space-y-1'>
                                <h5 className='font-semibold'>Veggie Burger</h5>
                                <div className="rating rating-sm sm:rating-xs">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"  readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                </div>
                                <p className='font-semibold'><span className='text-red-700 text-sm'>$</span>19.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left-Text section */}
                <div className="md:w-1/2 space-y-7 px-4">
                    <h2 className='md:text-5xl text-5xl font-bold md:leading-snug leading-snug'>Satisfy your cravings and experience a  <span className='text-primary-color'>Burger</span> like never before.</h2>
                    <p className='text-xl text-[#4A4A4A]'>"Craving something special? Our fresh, uniquely flavored burgers satisfy even the most discerning taste buds. Experience extraordinary!"</p>

                    <button className='btn bg-primary-color px-8 py-3 text-white font-semibold rounded-full hover:text-black'>Order Now</button>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Banner
