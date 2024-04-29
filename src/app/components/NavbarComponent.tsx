import React from 'react'
import Image from "next/image";
import Logo from '@/app/assets/Logo.png'

const NavbarComponent = () => {
    let isLoggedIn = false;

  return (
    <nav className='h-24 bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] flex justify-between items-center px-5'>
      <Image src={Logo} alt="logo" height={80} className='pb-2'/>
      <div className={`bg-[#57CDFF] border border-black rounded-full h-12 w-12 ${isLoggedIn ? 'block' : 'hidden'}`}></div>
    </nav>
  )
}

export default NavbarComponent
