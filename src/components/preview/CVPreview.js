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
                    fullName="text-3xl font-bold"
                    profession="text-base"
                    address="mt-5 text-xs font-medium"
                    previewContactHeading="text-xs font-medium"
                    previewContactInput="font-normal ml-1"
                    previewSummary="text-sm"
                />
            </div>

            {isClicked && (
                <div>
                    <div
                        className="inset-0 fixed bg-[rgba(0,0,0,0.4)]"
                        onClick={toggleClick}
                    ></div>
                    <Modal />
                </div>
            )}
        </div>
    );
};

export default Control;
