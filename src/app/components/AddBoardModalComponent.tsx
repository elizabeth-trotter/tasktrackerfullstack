"use client";

import { Button, Modal } from "flowbite-react";
import Image from 'next/image'
import XIcon from '@/app/assets/CloseModalIcon.png'

export default function AddBoardModalComponent(props: { openModal: boolean; onClose: () => void }) {

    return (
        <>
            <Modal show={props.openModal} onClose={props.onClose}>
                <Modal.Body>
                    <div className="grid grid-cols-2 font-[HammersmithOne]">
                        <div className="flex flex-col items-center gap-5 py-20 border-r-2 border-slate-500 border-dashed	">
                            <h2 className="text-4xl">Enter Code</h2>
                            <input type="text" />
                            <Button className="lg" color="success" onClick={props.onClose}>JOIN</Button>
                        </div>
                        <div>
                            <div className="flex justify-end pt-2 pe-2">
                                <Image src={XIcon} alt={"close button"} height={35} onClick={props.onClose} className="cursor-pointer"/>
                            </div>
                            <div className="flex flex-col items-center gap-5 pt-9">
                                <h2 className="text-4xl">Create New</h2>
                                <input type="text" placeholder="Name Board" />
                                <Button className="lg" color="success" onClick={props.onClose}>CREATE</Button>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
