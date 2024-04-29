import React, { useState } from 'react'
import Image from "next/image";
import Logo from '@/app/assets/Logo.png'

const NavbarComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userColor, setUserColor] = useState('#57CDFF');

  return (
    <nav className='h-24 bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] flex justify-between items-center px-5'>
      <Image src={Logo} alt="logo" height={80} className='pb-3'/>
      <div className={`bg-[${userColor}] border border-black rounded-full h-12 w-12 ${isLoggedIn ? 'block' : 'hidden'}`}></div>
    </nav>
  )
}

export default NavbarComponent
