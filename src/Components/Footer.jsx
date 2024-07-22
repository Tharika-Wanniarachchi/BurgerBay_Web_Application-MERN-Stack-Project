import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='bg-banner-color'>
        <footer className="footer xl:px-24 py-10 px-4 text-base-content section-container">
            <aside>
                <img src={"/logo.png"} alt="" />
                <p className='description ml-5 w-2/3 font-medium'>
                Savor the artistry where every dish is a culinary masterpiece
                </p>
            </aside>
            <nav className='font-medium'>
                <h6 className="footer-title">Useful links</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Events</a>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">FAQ</a>
            </nav>
            <nav className='font-medium'>
                <h6 className="footer-title">Main Menu</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Offers</a>
                <a className="link link-hover">Menus</a>
                <a className="link link-hover">Reservation</a>
            </nav>
            <nav className='font-medium'>
                <h6 className="footer-title">Contact Us</h6>
                <a className="link link-hover">example@email.com</a>
                <a className="link link-hover">+34 948 228 096</a>
                <a className="link link-hover">Social media </a>
            </nav>
        </footer>
        <hr />
        <footer className="footer xl:px-24 py-5 px-4  text-neutral-content items-center">

            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
                <a className='social-icon'>
                    <BiLogoFacebook/>
                </a>
                <a className='social-icon'>
                    <BiLogoInstagram/>
                </a>
                <a className='social-icon'>
                    <BiLogoTwitter/>
                </a>
                <a className='social-icon'>
                    <BiLogoYoutube/>
                </a>
            </nav>

            <aside className="grid-flow-col items-center text-[#555555]">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            
        </footer>
    </div>
  )
}

export default Footer
