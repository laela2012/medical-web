import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Contact from '../models/Contact';



const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const[showForm, setShowForm] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
        setMenu(false);
    };

    const openForm = () => {
        setShowForm(true);
    }

    const closeForm = () => {
        setShowForm(false);
    }

    return (
        <div>
            <div className='fixed w-full z-10 text-white'>
                <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-indigo-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <Link to='home' spy={true} smooth={true} duration={500} >
                            <h1 className='text-2xl font-semibold'>Wellness Vista.</h1>
                        </Link>
                    </div>

                    <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Home</Link>
                        <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>About Us</Link>
                        <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Services</Link>
                        <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Doctors</Link>
                        <Link to='blog' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Blog</Link>
                    </nav>
                    <div className='hidden lg:flex'>
                        <button className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300 transition duration-300 ease-in-out' onClick={openForm}>Contact Us</button>
                    </div>

                    {showForm && <Contact closeForm={closeForm} />}

                    <div className='lg:hidden flex items-center'>
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-indigo-400 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Home</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>About Us</Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Services</Link>
                    <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Doctors</Link>
                    <Link to='blog' spy={true} smooth={true} duration={500} className='hover:text-orange-300 cursor-pointer'>Blog</Link>

                    <div className='lg:hidden'>
                        <button className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300 transition duration-300 ease-in-out' onClick={openForm}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar