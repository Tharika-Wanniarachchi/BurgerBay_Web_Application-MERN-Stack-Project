import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from 'autoprefixer';
import Cards from '../../Components/Cards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const simpleNextArrow = (props) =>{
    const {className , style, onclick} =props;
    return(
        <div
            className={className}
            style={{...style,display: "block" ,background: "red"} }
            onclick ={onclick}>
            NEXT 
        </div>
    );
};

const simplePreArrow = (props) =>{
    const {className , style, onclick} =props;
    return(
        <div
            className={className}
            style={{...style,display: "block" ,background: "green"} }
            onclick ={onclick}>
            BACK 
        </div>
    );
};

const SpecialOfffer = () => {

    // import food menu
    const[recipes,setRecipes] = useState([]);
    const slider = React.useRef(null);

    useEffect (()=>{
        fetch("/menu.json")
            .then(res=> res.json())
            .then(data => {
                const speacial = data.filter((item=> item.category === "offer"))
                setRecipes(speacial)
            });
    },[])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // Show 3 cards on large screens
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
           
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 2, // Show 2 cards on medium screens
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 1, // Show 1 card on small screens
                    slidesToScroll: 1
                }
            }
        ],
        
        nextArrow:<simpleNextArrow/>,
        prevArrow:<simplePreArrow/>
      };

  return (
    <div className="section-container my-20 relative">

        {/* Topic area */}
        <div className='w-full flex flex-col justify-center items-center my-24'>
            <p className='subtitle'>Special Offer</p>
            <h2 className='title text-red-600 tracking-wide text-8xl'>Special offers</h2>
            <p className='text-3xl  font-bold'> From Our Menu</p> 
        </div>

        <div className='absolute right-3 top-8 mt-36 md:mr-24'>
            <button onClick={()=> slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5 bg-primary-color '><FaAngleLeft className='w-8 h-8 p-2'/></button>
            <button onClick={()=> slider?.current?.slickNext()} className='btn p-2 rounded-full ml-2 bg-primary-color'><FaAngleRight className='w-8 h-8 p-2'/></button>
        </div>

        <Slider ref={slider} {...settings} className='space-x-10'>
            {
                recipes.map((item, i) =>(
                    <Cards key={i} item ={item}/>
                ))
            }
        </Slider>


    </div>
  )
}

export default SpecialOfffer
