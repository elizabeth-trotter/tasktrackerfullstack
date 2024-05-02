'use client'

import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Image from 'next/image'
import InviteUserPlus from '@/app/assets/InviteUserPlus.png'
import TaskCardComponent from '../components/TaskCardComponent'
import { CreateNewTask } from '../components/CreateNewTaskModalComponent'
import { TaskModal } from '../components/TaskModalComponent'
import BoardsComponent from '../components/BoardsComponent'

const Board = () => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [userColor, setUserColor] = useState('#57CDFF');

    const openTaskModal = () => {
        setIsTaskModalOpen(true);
    };
    
    return (
        <div>
            <NavbarComponent userColor={userColor} />
            <div className='flex flex-row items-center pt-[40px] pl-[67px] pb-[60px]'>
                <p className='font-[HammersmithOne] text-[32px] pr-[20px]'>OUR BOARD</p>

                <div className='rounded-full bg-[#57CDFF] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <div className='rounded-full bg-[#FF6E6E] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <div className='rounded-full bg-[#D59FFF] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <Image src={InviteUserPlus} alt='Invite User' className='h-[24px] w-[24px]' />

            </div>

            <TaskModal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} />

            <BoardsComponent openTaskModal={openTaskModal} />
        </div>
    )
}

export default Board
