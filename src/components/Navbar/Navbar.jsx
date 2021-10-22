import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Navbar = () => {
    const { hero } = useContext(PortfolioContext);
    const { title, name, subtitle, cta } = hero;
  
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    }, []);
  
    return (
        <div>
            <header className="md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-right justify-between md:justify-end">
                    <nav className="hero-title md:mr-1 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700flex flex-wrap items-right text-right justify-end">
                        <a href="#about" className="mr-5 hover:text-white font-semibold">
                            About
                        </a>
                        <a href="#projects" className="mr-5 hover:text-white font-semibold">
                            Projects
                        </a>
                        <a href="#contact-form" className="mr-5 hover:text-white font-semibold">
                            Contact
                        </a>
                        <a href="./tyler_lenick_resume.pdf" target="_blank"><button class="font-semibold bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Resume
                        </button></a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar