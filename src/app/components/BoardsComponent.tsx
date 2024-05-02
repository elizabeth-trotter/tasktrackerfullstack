import React, { useState } from 'react'
import { CreateNewTask } from './CreateNewTaskModalComponent'
import TaskCardComponent from './TaskCardComponent'
import Draggable from 'react-draggable';

let taskInfo = [
    {
        id: 1,
        status: "toDo",
        position: { x: 0, y: 0 },
        title: "Test Login",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 2,
        status: "toDo",
        position: { x: 0, y: 0 },
        title: "Praise Ken",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#C8C8C8"
    },
    {
        id: 3,
        status: "toDo",
        position: { x: 0, y: 0 },
        title: "Test Create Acc...",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#57CDFF"
    },
    {
        id: 4,
        status: "toDo",
        position: { x: 0, y: 0 },
        title: "Set Up Profile...",
        description: "A short description of the task you are viewi...",
        priority: 3,
        userColor: "#D59FFF"
    },
    {
        id: 5,
        status: "toDo",
        position: { x: 0, y: 0 },
        title: "Test Login",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 6,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Login Function...",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 7,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Create Account...",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#D59FFF"
    },
    {
        id: 8,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Front End Funct...",
        description: "A short description of the task you are viewi...",
        priority: 4,
        userColor: "#57CDFF"
    },
    {
        id: 9,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Front End Accou...",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 10,
        status: "inProgress",
        position: { x: 0, y: 0 },
        title: "Login Function...",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 11,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Create Backend",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#D59FFF"
    },
    {
        id: 12,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Add Isaiah",
        description: "A short description of the task you are viewi...",
        priority: 2,
        userColor: "#FF6E6E"
    },
    {
        id: 13,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Discuss Style S...",
        description: "A short description of the task you are viewi...",
        priority: 3,
        userColor: "#C8C8C8"
    },
    {
        id: 14,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Create Frontend",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#57CDFF"
    },
    {
        id: 15,
        status: "completed",
        position: { x: 0, y: 0 },
        title: "Create Backend",
        description: "A short description of the task you are viewi...",
        priority: 1,
        userColor: "#D59FFF"
    }
];

const BoardsComponent = (props: { openTaskModal: () => void }) => {
    const [taskCards, setTaskCards] = useState(taskInfo);

    const handleDrag = (index: number, position: { x: number, y: number }) => {
        const updatedTaskCards = [...taskCards];
        updatedTaskCards[index].position = { x: position.x, y: position.y };
        setTaskCards(updatedTaskCards);
    };

    const handleDrop = (index: number, newStatus: string) => {
        const updatedTaskCards = [...taskCards];
        updatedTaskCards[index].status = newStatus;
        setTaskCards(updatedTaskCards);
    };

    return (
        <div>
            <div className='bg-[#AEE6D9] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>To-Do</p>
                    <CreateNewTask />
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    {
                        taskCards.map((task, index) => {
                            if (task.status == 'toDo') {
                                return (
                                    <Draggable key={index} onStop={(e, position) => handleDrag(index, position)}>
                                        <div>
                                            <TaskCardComponent id={task.id} status={task.status} position={task.position} title={task.title} description={task.description} priority={task.priority} color={task.userColor} onClick={props.openTaskModal} />
                                        </div>
                                    </Draggable>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className='bg-[#6FDFC4] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>In Progress</p>
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    {
                        taskCards.map((task, index) => {
                            if (task.status == 'inProgress') {
                                return (
                                    <Draggable key={index} onStop={(e, position) => handleDrag(index, position)}>
                                        <div key={index}>
                                            <TaskCardComponent id={task.id} status={task.status} position={task.position} title={task.title} description={task.description} priority={task.priority} color={task.userColor} onClick={props.openTaskModal} />
                                        </div>
                                    </Draggable>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className='bg-[#3EBE9F] rounded-[5px] flex flex-col mx-[110px] mb-[40px]'>
                <div className='flex flex-row items-center pl-[20px] pt-[10px]'>
                    <p className='font-[HammersmithOne] text-[28px] mr-[10px]'>Completed</p>
                </div>

                <div className='flex flex-row overflow-x-scroll px-[50px] py-[25px] gap-10'>
                    {
                        taskCards.map((task, index) => {
                            if (task.status == 'completed') {
                                return (
                                    <Draggable key={index} onStop={(e, position) => handleDrag(index, position)}>
                                        <div key={index}>
                                            <TaskCardComponent id={task.id} status={task.status} position={task.position} title={task.title} description={task.description} priority={task.priority} color={task.userColor} onClick={props.openTaskModal} />
                                        </div>
                                    </Draggable>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BoardsComponent
