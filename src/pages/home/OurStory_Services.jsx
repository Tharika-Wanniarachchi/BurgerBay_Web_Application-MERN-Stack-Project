import React from 'react'

const serviceListes = [
    {   
        id : 1,
        tittle:"Catering",
        desc : "Delight your guests with our flavors and  presentation",
        image : "/images/Services/icon1.png"
    },
    {   
        id : 2,
        tittle:"Fast delivery",
        desc : "We deliver your order promptly to your door",
        image : "/images/Services/icon2.png"
    },
    {   
        id : 3,
        tittle:"Online Ordering",
        desc : "Explore menu & order with ease using our Online Ordering ",
        image : "/images/Services/icon3.png"
    },
    {   
        id : 4,
        tittle:"Gift Cards",
        desc : "Give the gift of exceptional dining with Foodi Gift Cards",
        image : "/images/Services/icon4.png"
    },
]

const OurStory_Services = () => {
  return (
    <div className='section-container'>
        <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        
            {/* left description section */}
            <div className="md:w-1/2 items-center justify-center">
                {/* Topic area */}
                <div className='w-4/5 flex flex-col justify-center'>
                    <p className='subtitle'>Our Story & Services</p>
                    <h3 className='title'>Our Culinary Journey And Servicess</h3>  
                    <p className='description'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>      
                </div>
                <button className='btn bg-primary-color px-8 py-3 my-5 text-white font-semibold rounded-full'>Explore</button>         
            </div>

            {/* left-image section */}
            <div className="md:w-1/2 items-center justify-center"> 
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                    {
                        serviceListes.map((service) => (
                            <div key={service.id} className='service-card'>
                                <img src={service.image} alt="service" className='mx-auto'/>
                                <h5 className='pt-3 font-semibold text-primary-color uppercase tracking-wide'>{service.tittle}</h5>
                                <p className='justify-center text-[#BB7E57]'>{service.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
            
           
                
  )
}

export default OurStory_Services
