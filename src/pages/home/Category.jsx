import React from 'react'

const categoryItem = [
    {id:1 , title : 'Chicken Burger', description: '(16 dishes)', image:'/images/Category/fride-chicken.png'},
    {id:2 , title : 'Veggie Burger', description: '(10 dishes)', image:'/images/Category/double-classic.png'},
    {id:3 , title : 'Shawarma', description: '(18 dishes)', image:'/images/Category/tender-wrap.png'},
    {id:4 , title : 'Beverages', description: '(25 dishes)', image:'/images/Category/baverage.png'}
]



const Category = () => {
  return (
    
    <div className="section-container mt-28">

        {/* Topic area */}
        <div className='w-full flex flex-col justify-center items-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h3 className='title'>Popular Categories</h3>
        </div>

        {/* Category card section */}
        <div className="category-card-section ">
        {
            categoryItem.map((item,i)=>(
                <div key={i} className='category-card'>
                    <div className='card-image'>
                        <img src={item.image} alt="" className='p-5' />
                    </div>
                    <div className='mt-5 space-y-1'>
                        <h5 className='text-lg font-semibold'>{item.title}</h5>
                        <p className='text-sm font-semibold text-gray-500'>{item.description}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  
  )
}

export default Category
