import Link from 'next/link';
import { FaRegCopyright } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Image from 'next/image';
import landing from '../../public/mareatech.png'

const Footer = () => {

  const phoneNumber = '5492236343568'; // Reemplaza con tu número de teléfono en formato internacional
  const message = 'Hola, me gustaría obtener más información.'; // Reemplaza con tu mensaje predefinido
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return (
    <div className='mb-14 md:mb-0'>
      <div className='bg-dark-blue flex flex-col gap-10 justify-center items-center py-12'>
        <div className='flex text-white gap-10'>
          <FiInstagram />
          <FiFacebook />
          <FiTwitter />
        </div>
        <Image src={landing} alt='' className='w-1/2 md:w-1/5'/>
        <Link href={'/turnos'} className='bg-orange text-black font-bold py-2 px-6 rounded-lg shadow shadow-black'>Agendar Turno</Link>
      </div>
      <div className='flex justify-between p-4 bg-white text-dark-blue flex-col items-center md:flex-row'>
        <div className='flex items-center gap-x-2'>
          <FaRegCopyright />
          <p className="text-sm lg:text-base">2024 Marea Tech.</p>
        </div>
        <div className='flex text-lg lg:text-xl items-center gap-x-3'>
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" ><FaWhatsapp /></Link>
          <Link href={'https://www.linkedin.com/company/marea-tech/'} target='_BLANK'><FaLinkedinIn /></Link>
          <Link href={'https://www.instagram.com/marea__tech/'} target='_BLANK'><FaInstagram /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;