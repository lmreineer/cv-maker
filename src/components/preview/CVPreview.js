import { useState } from "react";
import Modal from "./CVModal.js";
import Content from "./CVContent.js";

const Control = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div
                className="shadow-all-sides-light w-[30rem] h-[87%] mt-[4rem] p-10 hover:cursor-pointer select-none"
                onClick={toggleClick}
            >
                <Content
                    fullName="text-2xl font-bold"
                    profession="text-sm"
                    address="mt-5 text-xs font-medium"
                    contactHeading="text-xs font-medium"
                    contactInput="font-normal ml-1"
                    summary="text-xs"
                    skills="font-bold italic border-b-2"
                    skillsList="list-disc ml-10 text-xs"
                    workHistory="mt-5 font-bold italic border-b-2"
                />
            </div>

            {isClicked && (
                <div>
                    <div
                        className="inset-0 fixed bg-modal-overlay"
                        onClick={toggleClick}
                    ></div>
                    <Modal />
                </div>
            )}
        </div>
    );
};

export default Control;
