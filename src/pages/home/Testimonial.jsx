import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <div className='section-container'>
        <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* left description section */}
            <div className="md:w-1/2 items-center justify-center">
                <img src="/images/Testimonials/testimonial.png" alt="testimonial.png" />
            </div>

            {/* left-image section */}
            <div className="md:w-1/2 items-center justify-center"> 
                
                {/* Topic area */}
                <div className='w-full flex flex-col justify-center'>
                    <p className='subtitle'>Testimonials</p>
                    <h3 className='title'>What Our Customers Say About Us</h3>
                    <blockquote className='description'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</blockquote>
                </div>
                <div className='flex flex-row gap-5 my-10'>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-12">
                            <img src="/images/Testimonials/testimonialProfile1.png" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="/images/Testimonials/testimonialProfile2.png" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="/images/Testimonials/testimonialProfile3.png" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-12">
                            <span>+99</span>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h5 className='text-lg font-semibold'>Customer Feedback</h5>
                        <div className='flex items-center gap-2'>
                            <FaStar className='text-yellow-400'/>
                            <span className='font-semibold text-[#535252]'>4.9</span>
                            <span className='font-medium text-[#807E7E]'>(18.6k Reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
