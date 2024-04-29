import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import InviteUserBtn from '@/app/assets/InviteUserBtn.png'
import PaintBrush from '@/app/assets/PaintBrush.png'
import Pencil from '@/app/assets/Pencil.png'
import Image from "next/image";

const Profile = () => {
  const [userColor, setUserColor] = useState('#57CDFF');
  
  return (
    <>
      <NavbarComponent />

      <div className='bg-[#F1FFFC] h-screen'>
        <div className='grid grid-cols-3 gap-8 py-8 px-8'>
          <div className='pt-4 flex justify-center items-baseline'>
            <Image src={PaintBrush} alt='add icon button' height={30}/>
            <div className={`bg-[${userColor}] border border-black rounded-full h-44 w-44`}></div>
            <Image src={Pencil} alt='add icon button' height={30}/>
          </div>
          <div className='col-span-2 bg-white border border-black rounded-sm p-4'>
            <div className='flex justify-center items-baseline gap-3'>
              <h2 className='text-2xl font-bold'>MY BOARDS</h2>
              <button>
                <Image src={InviteUserBtn} alt='add icon button' height={20}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
