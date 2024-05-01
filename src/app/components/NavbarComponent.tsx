'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Logo from '@/app/assets/Logo.png';
import { Dropdown } from "flowbite-react";
import Link from 'next/link';
import SignOut from '@/app/assets/SignOut.png';

interface NavbarProps {
  userColor?: string;
}

const NavbarComponent = ({ userColor }: NavbarProps) => {
  return (
    <nav className='h-24 bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] flex justify-between items-center px-5 font-[HammersmithOne]'>
      <Image src={Logo} alt="logo" height={80} className='pb-3' />

      <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='border border-black rounded-full h-12 w-12 cursor-pointer' style={{ background: userColor?.startsWith('#') ? userColor : `url(${userColor})`, backgroundPosition: 'center', backgroundSize: 'contain'}}></span>}>
        <Dropdown.Item as={Link} href="/ProfilePage"><span className='text-lg ps-7'>PROFILE</span></Dropdown.Item>
        <Dropdown.Item as={Link} href="/BoardPage"><span className='text-[#0B7D61] text-lg'>CREATE BOARD</span></Dropdown.Item>
        <Dropdown.Item as={Link} href="/"><span className='text-[#CD0000] text-lg ps-3'>LOG OUT</span> <Image src={SignOut} alt="sign out icon" className='pb-2 ps-2'/></Dropdown.Item>
      </Dropdown>
    </nav>
  )
}

// Define defaultProps for NavbarComponent
NavbarComponent.defaultProps = {
  userColor: null, // Set default value of userColor to null
};

export default NavbarComponent
