'use client'

import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import InviteUserBtn from '@/app/assets/InviteUserBtn.png'
import PaintBrush from '@/app/assets/PaintBrush.png'
import Pencil from '@/app/assets/Pencil.png'
import RandomizeColor from '@/app/assets/RandomizeColor.png'
import ProfilePicture from '@/app/assets/ProfilePicture.png'
import Image from "next/image";
import BoardBarComponent from '../components/BoardBarComponent'

const Profile = () => {
  const [userColor, setUserColor] = useState('#57CDFF');
  const [username, setUsername] = useState('USERNAME');
  const [dateJoined, setDateJoined] = useState('12/31/1937');
  const [paintBrushOver, setPaintBrushOver] = useState(false);
  const [pencilOver, setPencilOver] = useState(false);

  let boardBarColorArray = ['#AEE6D9', '#6FDFC4', '#3EBE9F'];

  const handleUserColorChange = () => {
    // setUserColor();
  };

  const handleMouseOverPencil = () => {
    setPencilOver(true);
  }
  const handleMouseOutPencil = () => {
    setPencilOver(false);
  }
  
  const handleUserImageChange = () => {
    
  };

  const handleMouseOverPaintbrush = () => {
    setPaintBrushOver(true);
  }
  const handleMouseOutPaintbrush = () => {
    setPaintBrushOver(false);
  }

  const handleAddBoard = () => {

  };

  return (
    <>
      <NavbarComponent userColor={userColor} />

      <div className='bg-[#F1FFFC] h-screen font-[HammersmithOne]'>
        <div className='grid grid-cols-3 gap-8 py-8 px-8'>
          <div className='flex flex-col items-center gap-7'>
            <div className='pt-4 flex justify-center items-baseline relative'>
              <div>
                <Image src={PaintBrush} alt='add icon button' height={30} onClick={handleUserColorChange} className='cursor-pointer' onMouseOver={handleMouseOverPaintbrush} onMouseOut={handleMouseOutPaintbrush} />
                <Image src={RandomizeColor} alt="random color mouseover" height={60} className={`absolute right-40 ${paintBrushOver ? 'block' : 'hidden'}`} />
              </div>

              <div className={`bg-[${userColor}] border border-black rounded-full h-44 w-44`}></div>

              <div>
                <Image src={Pencil} alt='add icon button' height={30} onClick={handleUserImageChange} className='cursor-pointer' onMouseOver={handleMouseOverPencil} onMouseOut={handleMouseOutPencil} />
                <Image src={ProfilePicture} alt="random color mouseover" height={60} className={`absolute left-40 ${pencilOver ? 'block' : 'hidden'}`} />
              </div>

            </div>
            <div className='text-center'>
              <h1 className='text-4xl'>{username.toUpperCase()}</h1>
              <p className='text-2xl pt-4'>Joined <span>{dateJoined}</span></p>
            </div>

          </div>


          <div className='col-span-2 bg-white border border-black rounded-sm p-4 h-[75%]'>
            <div className='pt-5 pb-8 flex justify-center items-baseline gap-3'>
              <h2 className='text-4xl'>MY BOARDS</h2>
              <button onClick={handleAddBoard}>
                <Image src={InviteUserBtn} alt='add icon button' height={20} className='pb-1' />
              </button>
            </div>
            <div className='flex flex-col items-center gap-10 overflow-y-scroll h-[75%]'>
              <BoardBarComponent title={'OUR BOARD'} boardColor={boardBarColorArray[0]} />
              <BoardBarComponent title={'chores'} boardColor={boardBarColorArray[1]} />
              <BoardBarComponent title={'Board #3'} boardColor={boardBarColorArray[2]} />
              <BoardBarComponent title={'OUR BOARD'} boardColor={boardBarColorArray[0]} />
              <BoardBarComponent title={'chores'} boardColor={boardBarColorArray[1]} />
              <BoardBarComponent title={'Board #3'} boardColor={boardBarColorArray[2]} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
