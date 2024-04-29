import React from 'react'
import Image from "next/image";
import Logo from '@/app/assets/Logo.png'

const NavbarComponent = () => {
  return (
    <nav className='h-24 bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] flex-col justify-start ps-5'>
      <Image src={Logo} alt="logo" height={80}/>
    </nav>
  )
}

export default NavbarComponent
