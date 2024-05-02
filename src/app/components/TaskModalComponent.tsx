'use client'
import React, { useState } from "react";
import Image from "next/image";
import InviteUserPlus from "@/app/assets/InviteUserPlus.png";
import XIcon from "@/app/assets/CloseModalIcon.png";
import { Modal } from "flowbite-react";
interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export function TaskModal({ isOpen, onClose }: TaskModalProps) {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");

    const options = [
        { value: "to-do", label: "To-Do" },
        { value: "inprogress", label: "In Progress" },
        { value: "completed", label: "Completed" },
    ];

    const options2 = [
        { value: "1", label: "Priority - 1" },
        { value: "2", label: "Priority - 2" },
        { value: "3", label: "Priority - 3" },
        { value: "4", label: "Priority - 4" },
        { value: "5", label: "Priority - 5" },
    ];

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const handleChange2 = (event: any) => {
        setSelectedValue2(event.target.value);
    };

    return (
        <>
            {isOpen && (
                <Modal show={isOpen} size={"5xl"} onClose={onClose}>
                    <div className="pt-[50px] px-[50px]">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[48px] font-[HammersmithOne]">Test Login</p>
                            <Image src={XIcon} alt="X/Close" onClick={onClose} />
                        </div>
                    </div>
                    <Modal.Body>
                        <p className="text-[24px] font-[HammersmithOne] px-[26px]">
                            Description
                        </p>
                        <div className="px-[26px] flex flex-row justify-between">
                            <div>
                                <textarea className="min-w-[589px] min-h-[123px] bg-[#F4F4F4] rounded-[5px] border-none" placeholder="A short description of the task you are viewing.
                                When login has been created by backend people, test login functionality using Postman.
                                Endpoint is https://azure.nonsense/ujsbuaskbfjks" />
                                <div className="flex flex-row justify-end">
                                    <div className="mt-[25px]">
                                        <p className="text-[24px] font-[HammersmithOne]">
                                            Comments
                                        </p>
                                        <textarea className="min-w-[589px] min-h-[89px] bg-white border border-black rounded-[10px]"/>
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
                                        <p className="font-[HammersmithOne] text-[20px]">
                                            Created 12/31/1936
                                        </p>
                                    </div>
                                    <div className="flex justify-center flex-col">
                                        <select
                                            value={selectedValue}
                                            onChange={handleChange}
                                            className="mt-[15px] min-w-[187px] min-h-[39px] text-[#0B7D61] font-[HammersmithOne] text-[24px] rounded-[10px]"
                                        >
                                            {options.map((option) => (
                                                <option
                                                    className="focus:bg-white"
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex justify-center flex-col">
                                        <select
                                            value={selectedValue2}
                                            onChange={handleChange2}
                                            className="mt-[15px] min-w-[187px] min-h-[39px] text-[#0B7D61] font-[HammersmithOne] text-[24px] rounded-[10px]"
                                            
                                        >
                                            {options2.map((option) => (
                                                <option
                                                    className="focus:bg-white"
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
}
