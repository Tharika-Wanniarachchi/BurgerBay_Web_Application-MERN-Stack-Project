import React, { useEffect, useState } from 'react';
import logo from '/logo.png';
import { BiPhoneCall } from "react-icons/bi";
import { FaRegUser } from 'react-icons/fa';
import Modal from './Modal';

    const Navbar = () => {
        const[isSticky, setSticky] = useState(false);

        // Handle Scroll functions
        useEffect( ()=>{
            const handleScroll = () =>{
                const offSet = window.scrollY;
                if(offSet > 0){
                    setSticky(true)
                }else{
                    setSticky(false)
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll); 
            };

        }, []);

    const navItems = (
    <>
        <li><a href='/' className='text-primary-color'>Home</a></li>
        <li><a href='/menu' activeClassName="active">Menu</a></li>
        <li>
            <details>
            <summary>Services</summary>
            <ul className="p-2">
                <li><a href="/services">Online Order</a></li>
                <li><a href='/services'>Table Booking</a></li>
                <li><a href='/services'>Order Tracking</a></li>
            </ul>
            </details>
        </li>
        <li><a href='/offers'>Offers</a></li>
    </>);
    
  return (
   // <header className='w-full shadow-lg fixed'>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? "shadow-md bg-base-100" : ""}`}>
        <div className="section-container">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a href="/" >
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    {/* Search Button */}
                    <button className="btn btn-ghost btn-circle mr-2  hidden lg:flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* Cart items */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 hidden lg:flex items-center justify-center">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item  bg-primary-color">8</span>
                        </div>
                    </div>

                    {/* Login Button */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-primary-color rounded-full px-6 text-white flex items-center gap-2 hover:text-black"
                     onClick={()=>document.getElementById('my_modal_5').showModal()}>
                        <FaRegUser/> Login
                    </button>
                    <Modal/>
                </div>
            </div>
        </div>      
    </header>
     //</header>
  )
}

export default Navbar
