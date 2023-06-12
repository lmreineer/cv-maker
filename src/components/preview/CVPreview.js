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
                    fullName="text-xl font-bold"
                    profession="text-sm"
                    address="mt-3 text-[0.65rem] font-medium"
                    contactHeading="text-[0.65rem] font-medium"
                    contactInput="font-normal ml-1"
                    summaryContainer="mt-3"
                    summary="text-xs"
                    mainBackgroundContainer="mt-5"
                    mainBackgroundHeading="font-bold italic border-b-2 text-sm mt-3"
                    skillsList="list-disc ml-10 mt-2 text-[0.65rem]"
                    stayPeriodContainer="flex mt-3"
                    workTimePeriodContainer="text-[0.65rem] w-24"
                    stayDetailContainer="ml-20 text-[0.65rem]"
                    stayDetailHeading="text-sm"
                    institution="mt-1 italic font-light"
                    workDescriptionContainer="list-disc ml-5 mt-2"
                    workDescriptionList="font-light"
                    educationTimePeriodContainer="text-[0.65rem]"
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
