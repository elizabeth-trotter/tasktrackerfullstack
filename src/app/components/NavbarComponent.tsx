'use client'

import React, { useState } from 'react'
import Image from "next/image";
import Logo from '@/app/assets/Logo.png'

interface NavbarProps {
  userColor?: string;
}

const NavbarComponent = ({ userColor }: NavbarProps) => {
  console.log(userColor);
  return (
    <nav className='h-24 bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] flex justify-between items-center px-5'>
      <Image src={Logo} alt="logo" height={80} className='pb-3'/>
      <div className={`${userColor ? `bg-[${userColor}] border border-black rounded-full h-12 w-12` : ''}`}></div>
    </nav>
  )
}

// Define defaultProps for NavbarComponent
NavbarComponent.defaultProps = {
  userColor: null, // Set default value of userColor to null
};

export default NavbarComponent
