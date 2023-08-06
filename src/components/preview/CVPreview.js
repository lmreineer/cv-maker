import { useState } from 'react';

import CVContent from './CVContent';

import CVModal from './CVModal';

const CVPreview = ({
    firstNameInput,
    lastNameInput,
    professionInput,
    countryInput,
    cityContactInput,
    stateContactInput,
    zipCodeInput,
    phoneInput,
    emailInput,
    jobTitleInput,
    companyInput,
    cityWorkInput,
    stateWorkInput,
    yearStartWorkInput,
    monthStartWorkInput,
    yearEndWorkInput,
    monthEndWorkInput,
    currentlyWorkingCheckboxValue,
    bulletPointOneInput,
    bulletPointTwoInput,
    bulletPointThreeInput,
    bulletPointFourInput,
}) => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleClick = () => setIsClicked(!isClicked);

    return (
        <div>
            <div
                className="my-[3rem] h-[43.3rem] w-[30rem] select-none overflow-auto break-all rounded-lg border-2 bg-white p-10 hover:cursor-pointer"
                onClick={toggleClick}
            >
                <CVContent
                    fullName="text-2xl font-bold"
                    firstNameInput={firstNameInput}
                    lastNameInput={lastNameInput}
                    profession="text-base"
                    professionInput={professionInput}
                    address="mt-3 text-xs font-medium"
                    contactHeading="text-xs font-medium"
                    contactInput="font-normal ml-1"
                    countryInput={countryInput}
                    cityContactInput={cityContactInput}
                    stateContactInput={stateContactInput}
                    zipCodeInput={zipCodeInput}
                    phoneInput={phoneInput}
                    emailInput={emailInput}
                    summaryContainer="mt-5"
                    mainBackgroundHeading="font-bold italic border-b-2 text-base mt-3"
                    summary="text-xs mt-3"
                    mainBackgroundContainer="mt-5"
                    skillsList="list-disc ml-10 mt-2 text-xs"
                    stayPeriodContainer="flex mt-3"
                    workDatePeriodContainer="w-56 text-xs"
                    yearStartWorkInput={yearStartWorkInput}
                    monthStartWorkInput={monthStartWorkInput}
                    yearEndWorkInput={yearEndWorkInput}
                    monthEndWorkInput={monthEndWorkInput}
                    currentlyWorkingCheckboxValue={
                        currentlyWorkingCheckboxValue
                    }
                    stayDetailContainer="text-xs w-full"
                    stayDetailHeading="text-base"
                    jobTitleInput={jobTitleInput}
                    institution="mt-1 italic font-light"
                    companyInput={companyInput}
                    cityWorkInput={cityWorkInput}
                    stateWorkInput={stateWorkInput}
                    workDescriptionContainer="ml-10 mt-2"
                    workDescriptionList="font-light"
                    bulletPointOneInput={bulletPointOneInput}
                    bulletPointTwoInput={bulletPointTwoInput}
                    bulletPointThreeInput={bulletPointThreeInput}
                    bulletPointFourInput={bulletPointFourInput}
                    educationDatePeriodContainer="text-xs w-20"
                />
            </div>

            {isClicked && (
                <div>
                    <div
                        className="fixed inset-0 bg-modal-overlay"
                        onClick={toggleClick}
                    ></div>
                    <CVModal
                        firstNameInput={firstNameInput}
                        lastNameInput={lastNameInput}
                        professionInput={professionInput}
                        countryInput={countryInput}
                        cityContactInput={cityContactInput}
                        stateContactInput={stateContactInput}
                        zipCodeInput={zipCodeInput}
                        phoneInput={phoneInput}
                        emailInput={emailInput}
                    />
                </div>
            )}
        </div>
    );
};

export default CVPreview;
