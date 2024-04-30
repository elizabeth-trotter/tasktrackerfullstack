import React from 'react'

const TaskCardComponent = () => {
    return (
        <div className='bg-white rounded-[10px] py-[14px] px-[20px] min-w-[269px] w-[269px]'>
            <p className='font-[HammersmithOne] text-[24px]'>Test Login</p>
            <p className='font-[HammersmithOne] text-[16px]'>A short description of the task you are viewi...</p>
            <div className='flex flex-row justify-between items-center'>
                <p className='font-[HammersmithOne] text-[20px]'>Priority - 2</p>
                <div className='rounded-full bg-[#FF6E6E] h-[50px] w-[50px] border border-black mr-[10px]'></div>
            </div>
        </div>
    )
}

export default TaskCardComponent
