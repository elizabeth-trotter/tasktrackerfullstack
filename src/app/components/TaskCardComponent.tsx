'use client'
import { describe } from 'node:test'
import React from 'react';
import Draggable from 'react-draggable';

const TaskCardComponent = (props: { title: string, description: string, priority: number, color: string, onClick: () => void }) => {
    return (
        <Draggable>
            <div onClick={props.onClick}>
                <div className='bg-white rounded-[10px] py-[14px] px-[20px] min-w-[269px] w-[269px]'>
                    <p className='font-[HammersmithOne] text-[24px]'>{props.title}</p>
                    <p className='font-[HammersmithOne] text-[16px]'>{props.description}</p>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='font-[HammersmithOne] text-[20px]'>Priority - <span>{props.priority}</span></p>
                        <div className={`rounded-full bg-[${props.color}] h-[50px] w-[50px] border border-black mr-[10px]`}></div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default TaskCardComponent;

