import { useState } from "react";
import Modal from "./CVModal.js";
import Content from "./CVContent.js";

const Control = ({
    firstNameInput,
    lastNameInput,
    professionInput,
    countryInput,
    cityInput,
    stateProvinceInput,
    zipCodeInput,
    phoneInput,
    emailInput,
}) => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div
                className="shadow-all-sides-light w-[30rem] h-[43.3rem] mt-[4rem] p-10 hover:cursor-pointer select-none overflow-auto break-all"
                onClick={toggleClick}
            >
                <Content
                    fullName="text-2xl font-bold"
                    firstNameInput={firstNameInput}
                    lastNameInput={lastNameInput}
                    profession="text-base"
                    professionInput={professionInput}
                    address="mt-3 text-xs font-medium"
                    contactHeading="text-xs font-medium"
                    contactInput="font-normal ml-1"
                    countryInput={countryInput}
                    cityInput={cityInput}
                    stateProvinceInput={stateProvinceInput}
                    zipCodeInput={zipCodeInput}
                    phoneInput={phoneInput}
                    emailInput={emailInput}
                    summaryContainer="mt-5"
                    mainBackgroundHeading="font-bold italic border-b-2 text-base mt-3"
                    summary="text-xs mt-3"
                    mainBackgroundContainer="mt-5"
                    skillsList="list-disc ml-10 mt-2 text-xs"
                    stayPeriodContainer="flex mt-3"
                    workTimePeriodContainer="text-xs w-44"
                    stayDetailContainer="ml-20 text-xs w-full"
                    stayDetailHeading="text-base"
                    institution="mt-1 italic font-light"
                    workDescriptionContainer="list-disc ml-5 mt-2"
                    workDescriptionList="font-light"
                    educationTimePeriodContainer="text-xs w-20"
                />
            </div>

            {isClicked && (
                <div>
                    <div
                        className="inset-0 fixed bg-modal-overlay"
                        onClick={toggleClick}
                    ></div>
                    <Modal
                        firstNameInput={firstNameInput}
                        lastNameInput={lastNameInput}
                        professionInput={professionInput}
                        countryInput={countryInput}
                        phoneInput={phoneInput}
                        emailInput={emailInput}
                    />
                </div>
            )}
        </div>
    );
};

export default Control;
