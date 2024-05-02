import { Button, Modal, Dropdown } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import InviteUserPlus from '@/app/assets/InviteUserPlus.png'
import XIcon from '@/app/assets/CloseModalIcon.png'

export function CreateNewTask() {

    const [openModal, setOpenModal] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');

    const options = [
        { value: 'to-do', label: 'To-Do' },
        { value: 'inprogress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
    ];
    const options2 = [
        { value: '1', label: 'Priority - 1' },
        { value: '2', label: 'Priority - 2' },
        { value: '3', label: 'Priority - 3' },
        { value: '4', label: 'Priority - 4' },
        { value: '5', label: 'Priority - 5' },
    ];

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };
    const handleChange2 = (event: any) => {
        setSelectedValue2(event.target.value);
    };

    return (
        <>
            <button onClick={() => setOpenModal(true)}><Image src={InviteUserPlus} className='h-[20px] w-[20px]' alt="Add Task" /></button>
            <Modal show={openModal} size={"5xl"} onClose={() => setOpenModal(false)}>
                <div className="pt-[50px] px-[50px]">
                    <div className="flex flex-row justify-between items-center">
                        <input className="text-[48px] font-[HammersmithOne]" placeholder="Task Name"/>
                        <Image src={XIcon} alt="X/Close" onClick={() => setOpenModal(false)} />
                    </div>
                </div>
                <Modal.Body>
                    <p className="text-[24px] font-[HammersmithOne] px-[26px]">Description</p>
                    <div className="px-[26px] flex flex-col lg:flex-row justify-between">
                        <div className="mb-4 lg:mb-0 lg:mr-4">
                            <textarea className="min-w-full lg:w-[589px] min-h-[211px] bg-[#F4F4F4] rounded-[5px] border-none" placeholder="A short description of the task you are viewing.
                                When login has been created by backend people, test login functionality using Postman.
                                Endpoint is https://azure.nonsense/ujsbuaskbfjks"/>
                            <div className="flex justify-end mt-2">
                                <div className=" hidden lg:block">
                                    <button className="bg-[#ABABAB] px-[29px] py-[9px] rounded-[10px] mr-[30px] text-white font-[HammersmithOne] text-[16px]" onClick={() => setOpenModal(false)}> Cancel</button>
                                    <button className="bg-[#0B7D61] px-[29px] py-[9px] rounded-[10px] text-white font-[HammersmithOne] text-[16px]" onClick={() => setOpenModal(false)}>
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[260px] px-2">
                            <div className="bg-[#F4F4F4] rounded-[5px] p-4">
                                <div className="flex justify-between mb-4">
                                    <div className="text-[20px] font-[HammersmithOne]">
                                        <p>Assignee:</p>
                                        <p className="text-[#5E5E5E]">username</p>
                                    </div>
                                    <div className="rounded-full bg-[#FF6E6E] h-[50px] w-[50px] border border-black"></div>
                                </div>
                                <p className="font-[HammersmithOne] text-[20px]">Created 12/31/1936</p>
                                <div className="mt-4">
                                    <select value={selectedValue} onChange={handleChange} className="min-w-[187px] min-h-[39px] text-[#0B7D61] font-[HammersmithOne] text-[24px] rounded-[10px]">
                                        {options.map((option) => (
                                            <option className="focus:bg-white" key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <select value={selectedValue2} onChange={handleChange2} className="min-w-[187px] min-h-[39px] text-[#0B7D61] font-[HammersmithOne] text-[24px] rounded-[10px]">
                                        {options2.map((option) => (
                                            <option className="focus:bg-white" key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className=" block lg:hidden">
                            <div className="flex justify-end pt-[15px]">
                            <button className="bg-[#ABABAB] px-[29px] py-[9px] rounded-[10px] mr-[10px] text-white font-[HammersmithOne] text-[16px]" onClick={() => setOpenModal(false)}> Cancel</button>
                            <button className="bg-[#0B7D61] px-[29px] py-[9px] rounded-[10px] text-white font-[HammersmithOne] text-[16px]" onClick={() => setOpenModal(false)}>
                                Create
                            </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
