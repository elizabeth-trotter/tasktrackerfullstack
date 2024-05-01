
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import InviteUserPlus from '@/app/assets/InviteUserPlus.png'
import XIcon from '@/app/assets/CloseModalIcon.png'

export function CreateNewTask() {

    const [openModal, setOpenModal] = useState(true);

    const [showModal, setShowModal] = useState<string>("hidden")
    const [showBool, setShowBool] = useState<boolean>(true);

    const handleShowModal = () => {
        setShowBool(!showBool)
        if (showBool) {
            setShowModal("flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80");
        } else {
            setShowModal("hidden")
        }

    }
    return (
        <>
            <button onClick={() => setOpenModal(true)}><Image src={InviteUserPlus} className='h-[20px] w-[20px]' alt="Add Task" /></button>
            <Modal show={openModal} size={"5xl"} onClose={() => setOpenModal(false)}>
                <div className="pt-[50px] px-[50px]">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-[48px] font-[HammersmithOne]">Test Login</p>
                        <Image src={XIcon} alt="X/Close" onClick={() => setOpenModal(false)} />
                    </div>
                </div>
                <Modal.Body>
                    <p className="text-[24px] font-[HammersmithOne] px-[26px]">Description</p>
                    <div className="px-[26px] flex flex-row justify-between">
                        <div>
                            <textarea className="min-w-[589px] min-h-[211px]" placeholder="A short description of the task you are viewing.
                                When login has been created by backend people, test login functionality using Postman.
                                Endpoint is https://azure.nonsense/ujsbuaskbfjks"/>
                            <div className="flex flex-row justify-end">
                                <div className="mt-[25px]">
                                    <button className="bg-[#ABABAB] px-[29px] py-[9px] rounded-[10px] mr-[30px] text-white font-[HammersmithOne] text-[16px]" onClick={() => setOpenModal(false)}> Cancel</button>
                                    <button className="bg-[#0B7D61] px-[29px] py-[9px] rounded-[10px] text-white font-[HammersmithOne] text-[16px]" onClick={() => setOpenModal(false)}>
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="min-w-[260px] w-full h-full px-[25px] pt-[25px] bg-[#F4F4F4]">
                                <div className="flex flex-row justify-between">
                                    <div className="text-[20px] font-[HammersmithOne]">
                                        <p>Assignee:</p>
                                        <p className="text-[#5E5E5E]">username</p>
                                    </div>
                                    <div className="rounded-full bg-[#FF6E6E] h-[50px] w-[50px] border border-black"></div>
                                </div>
                                <div className="pt-[27px]">
                                    <p className="font-[HammersmithOne] text-[20px]">Created 12/31/1936</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
