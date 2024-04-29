import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Image from 'next/image'
import InviteUserPlus from '@/app/assets/InviteUserPlus.png'
const Board = () => {
    return (
        <div>
            <NavbarComponent />
            <div className='flex flex-row items-center pt-[40px] pl-[67px] pb-5'>
                <p className='font-[HammersmithOne] text-[32px] pr-[20px]'>OUR BOARD</p>

                <div className='rounded-full bg-[#57CDFF] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <div className='rounded-full bg-[#FF6E6E] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <div className='rounded-full bg-[#D59FFF] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <Image src={InviteUserPlus} alt='Invite User' className='h-[24px] w-[24px]' />

            </div>

            <div className='bg-[#AEE6D9] rounded-[5px] flex flex-col mx-[110px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>To-Do</p>
                    <Image src={InviteUserPlus} className='h-[20px] w-[20px]' alt="Add Task" />
                </div>

                <div className='flex flex-row'>
                    <div className='bg-white rounded-[10px] ml-[50px] mb-[25px] w-[268px] h-[168px] py-[14px] px-[20px]'>
                        <p className='font-[HammersmithOne] text-[24px]'>Test Login</p>
                        <p className='font-[HammersmithOne] text-[16px]'>A short description of the task you are viewi...</p>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='font-[HammersmithOne] text-[20px]'>Priority - 2</p>
                            <div className='rounded-full bg-[#FF6E6E] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Board
