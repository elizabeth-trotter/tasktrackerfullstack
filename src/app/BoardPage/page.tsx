'use client'

import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Image from 'next/image'
import InviteUserPlus from '@/app/assets/InviteUserPlus.png'
import TaskCardComponent from '../components/TaskCardComponent'
import { CreateNewTask } from '../components/CreateNewTaskModalComponent'
const Board = () => {

    let taskInfo = {
        title: "Test Login",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    }
    return (
        <div>
            <NavbarComponent />
            <div className='flex flex-row items-center pt-[40px] pl-[67px] pb-[60px]'>
                <p className='font-[HammersmithOne] text-[32px] pr-[20px]'>OUR BOARD</p>

                <div className='rounded-full bg-[#57CDFF] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <div className='rounded-full bg-[#FF6E6E] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <div className='rounded-full bg-[#D59FFF] h-[50px] w-[50px] border border-black mr-[10px]'></div>
                <Image src={InviteUserPlus} alt='Invite User' className='h-[24px] w-[24px]' />

            </div>

            <div className='bg-[#AEE6D9] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>To-Do</p>
                    <CreateNewTask/>
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} />
                </div>
            </div>

            <div className='bg-[#6FDFC4] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>In Progress</p>
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} />
                </div>
            </div>

            <div className='bg-[#3EBE9F] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>Completed</p>
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} />
                </div>
            </div>
        </div>
    )
}

export default Board
