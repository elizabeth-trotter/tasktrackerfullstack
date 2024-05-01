'use client'

import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import InviteUserBtn from '@/app/assets/InviteUserBtn.png'
import PaintBrush from '@/app/assets/PaintBrush.png'
import Pencil from '@/app/assets/Pencil.png'
import RandomizeColor from '@/app/assets/RandomizeColor.png'
import ProfilePicture from '@/app/assets/ProfilePicture.png'
import Image from "next/image";
import BoardBarComponent from '../components/BoardBarComponent'
import AddBoardModalComponent from '../components/AddBoardModalComponent'
import { Button } from 'flowbite-react'

const Profile = () => {
  const [userColor, setUserColor] = useState('#57CDFF');
  const [username, setUsername] = useState('USERNAME');
  const [dateJoined, setDateJoined] = useState('12/31/1937');
  const [paintBrushOver, setPaintBrushOver] = useState(false);
  const [pencilOver, setPencilOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let boardBarColorArray = ['#AEE6D9', '#6FDFC4', '#3EBE9F'];
  let userColorsArray = ['#57CDFF', '#FF6E6E', '#D59FFF', '#D3FF57', '#FFC56E', '#57CDFF', '#D59FFF', '#57CDFF', '#513DCC'];

  const handleUserColorChange = () => {
    let randIdx = Math.floor(Math.random() * userColorsArray.length);
    setUserColor(userColorsArray[randIdx]);
  };

  const handleMouseOverPencil = () => {
    setPencilOver(true);
  }
  const handleMouseOutPencil = () => {
    setPencilOver(false);
  }

  const handleUserImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    const file = e.target.files?.[0];

    if (file) {
      reader.onload = () => {
        setUserColor(reader.result as string);
      }
      reader.readAsDataURL(file);
    }
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

              <div className='border border-black rounded-full h-44 w-44' style={{ background: userColor.startsWith('#') ? userColor : `url(${userColor})`, backgroundPosition: 'center', backgroundSize: 'contain' }}></div>

              <div>
                <label htmlFor="uploadImage">
                  <Image src={Pencil} alt='add icon button' height={30} className='cursor-pointer' onMouseOver={handleMouseOverPencil} onMouseOut={handleMouseOutPencil} />
                </label>
                <input id="uploadImage" type="file" accept="image/*" className='hidden' onChange={handleUserImageChange} />

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
              <button onClick={() => setOpenModal(true)}>
                <Image src={InviteUserBtn} alt='add icon button' height={20} className='pb-1' />
              </button>
              <AddBoardModalComponent openModal={openModal} onClose={() => setOpenModal(false)} />
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
