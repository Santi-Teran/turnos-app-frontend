'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/mareatech.png';
import { FaHome } from 'react-icons/fa';
import { FaScissors } from 'react-icons/fa6';
import { AiFillInfoCircle } from "react-icons/ai";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full fixed bg-dark-blue text-white shadow-md shadow-black'>
      <div className='hidden md:flex justify-between items-center p-4'>
        <div className='flex items-center gap-12'>
          <Link href='/' className='md:w-1/6 w-1/2'>
            <Image src={logo} alt='Marea Tech'/>
          </Link>
          <ul className='flex gap-12'>
            <li className='cursor-pointer hover:scale-110 transition-all' onClick={() => scrollToSection('inicio')}>Inicio</li>
            <li className='cursor-pointer hover:scale-110 transition-all' onClick={() => scrollToSection('servicios')}>Servicios</li>
            <li className='cursor-pointer hover:scale-110 transition-all' onClick={() => scrollToSection('nosotros')}>Nosotros</li>
          </ul>
        </div>
        <Link href={'/turnos'} className='bg-orange text-black font-bold py-2 px-6 rounded-lg shadow shadow-black'>Agendar Turno</Link>
      </div>

      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-dark-blue z-10'>
        <ul className='text-white flex justify-around'>
          <li onClick={() => scrollToSection('inicio')} className='p-4 text-2xl cursor-pointer'><FaHome /></li>
          <li onClick={() => scrollToSection('servicios')} className='p-4 text-2xl cursor-pointer'><FaScissors /></li>
          <li onClick={() => scrollToSection('nosotros')} className='p-4 text-2xl cursor-pointer'><AiFillInfoCircle /></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
