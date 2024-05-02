import React from 'react'
import { CreateNewTask } from './CreateNewTaskModalComponent'
import TaskCardComponent from './TaskCardComponent'

let taskInfo = [
    {
        id: 1,
        status: "toDO",
        position: { x: 0, y: 0 },
        title: "Test Login",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 2,
        status: "toDO",
        position: { x: 0, y: 0 },
        title: "Praise Ken",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#C8C8C8"
    },
    {
        id: 3,
        status: "toDO",
        position: { x: 0, y: 0 },
        title: "Test Create Acc...",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#57CDFF"
    },
    {
        id: 4,
        status: "toDO",
        position: { x: 0, y: 0 },
        title: "Set Up Profile...",
        description: "A short description of the task you are viewi...",
        priority: 3,
        userColor: "#D59FFF"
    },
    {
        id: 5,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Login Function...",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },    
    {
        id: 6,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Create Account...",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#D59FFF"
    },
    {
        id: 7,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Front End Funct...",
        description: "A short description of the task you are viewi...",
        priority: 4,
        userColor: "#57CDFF"
    },
    {
        id: 8,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Front End Accou...",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 9,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Create Backend",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#D59FFF"
    },
    {
        id: 10,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Add Isaiah",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 11,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Discuss Style S...",
        description: "A short description of the task you are viewi...",
        priority: 3,
        userColor: "#C8C8C8"
    },
    {
        id: 12,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Create Frontend",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#57CDFF"
    }
];

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
