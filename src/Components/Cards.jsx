import React, { useState } from 'react'
import { BiCaretLeftCircle, BiCartAdd } from 'react-icons/bi';
import { FaCircle, FaHeart } from 'react-icons/fa';
import { FaCartPlus, FaCirclePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom'

const Cards = ({item}) => {

    const [isHeartFillted,setIsHeartFillted] = useState(false);

    const handleHeartClick = ()=>{
        setIsHeartFillted(!isHeartFillted)
    }

  return (
    
     <div className="card bg-base-100 lg:w-11/12 shadow-xl px-4 pt-8 my-10">
        <div className={`rating gap-1 absolute right-0 top-0 p-4 heartStar bg-secondary-bg-color 
            ${isHeartFillted ? "text-red-500" : "text-white"}`}
            onClick={handleHeartClick}>

            <FaHeart className='h-5 w-5 cursor-pointer'/>

        </div>

        <Link to={`/menu/${item.id}`}>
            <figure>
                <img
                src={item.image}
                alt="burger" 
                className='hover:scale-105 transition-all duration-200 md:h-60 '
                />
            </figure>
        </Link>

        <div className="card-body">
            <Link to={`/menu/${item.id}`}>
                <h2 className="card-title">{item.name}</h2>
                <p className='description'>{item.description}</p>
            </Link>
            <div className="card-actions items-center justify-between">
                <h4 className='font-semibold text-lg'><span className='text-red-600 text-sm'>$</span>{item.price}</h4>
                <button className="btn relative bg-card-bg"><FaCartPlus className='text-xl'/><FaCirclePlus className='absolute right-2 top-2 text-red-600'/></button>
            </div>
        </div>
        </div>
    
  )
}

export default Cards
