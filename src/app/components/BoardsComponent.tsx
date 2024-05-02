import React from 'react'
import { CreateNewTask } from './CreateNewTaskModalComponent'
import TaskCardComponent from './TaskCardComponent'

let taskInfo = {
    title: "Test Login",
    description: "A short description of the task you are viewi...",
    priority: 2,
    userColor: "#FF6E6E"
}

const BoardsComponent = (props: { openTaskModal: () => void }) => {
    return (
        <div>
            <div className='bg-[#AEE6D9] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>To-Do</p>
                    <CreateNewTask />
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                </div>
            </div>

            <div className='bg-[#6FDFC4] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>In Progress</p>
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                </div>
            </div>

            <div className='bg-[#3EBE9F] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>Completed</p>
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                    <TaskCardComponent title={taskInfo.title} description={taskInfo.description} priority={taskInfo.priority} color={taskInfo.userColor} onClick={props.openTaskModal} />
                </div>
            </div>
        </div>
    )
}

export default BoardsComponent
