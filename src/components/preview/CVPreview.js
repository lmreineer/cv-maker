import { useState } from 'react';

import CVContent from './CVContent';

import CVModal from './CVModal';

const CVPreview = ({
    firstNameInput,
    lastNameInput,
    professionInput,
    cityHeadingInput,
    stateHeadingInput,
    countryInput,
    zipCodeInput,
    phoneInput,
    emailInput,
    yearStartWorkInput,
    monthStartWorkInput,
    yearEndWorkInput,
    monthEndWorkInput,
    currentlyWorkingCheckboxValue,
    jobTitleInput,
    companyInput,
    cityWorkInput,
    stateWorkInput,
    workResponsibilityOneInput,
    workResponsibilityTwoInput,
    workResponsibilityThreeInput,
    workResponsibilityFourInput,
    secondYearStartWorkInput,
    secondMonthStartWorkInput,
    secondYearEndWorkInput,
    secondMonthEndWorkInput,
    secondCurrentlyWorkingCheckboxValue,
    secondJobTitleInput,
    secondCompanyInput,
    secondCityWorkInput,
    secondStateWorkInput,
    secondWorkResponsibilityOneInput,
    secondWorkResponsibilityTwoInput,
    secondWorkResponsibilityThreeInput,
    secondWorkResponsibilityFourInput,
    yearStartGraduationInput,
    monthStartGraduationInput,
    schoolNameInput,
    schoolLocationInput,
    degreeInput,
    fieldOfStudyInput,
    skillOneInput,
    skillTwoInput,
    skillThreeInput,
    skillFourInput,
    skillFiveInput
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
                    contactInput="font-normal ml-1"
                    cityHeadingInput={cityHeadingInput}
                    stateHeadingInput={stateHeadingInput}
                    countryInput={countryInput}
                    zipCodeInput={zipCodeInput}
                    contactHeading="text-xs font-medium"
                    phoneInput={phoneInput}
                    emailInput={emailInput}
                    summaryContainer="mt-5"
                    mainBackgroundHeading="font-bold italic border-b-2 text-base mt-3"
                    summary="text-xs mt-3"
                    mainBackgroundContainer="mt-5"
                    skillsList="ml-10 mt-2 text-xs"
                    skillOneInput={skillOneInput}
                    skillTwoInput={skillTwoInput}
                    skillThreeInput={skillThreeInput}
                    skillFourInput={skillFourInput}
                    skillFiveInput={skillFiveInput}
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
                    workResponsibilityOneInput={workResponsibilityOneInput}
                    workResponsibilityTwoInput={workResponsibilityTwoInput}
                    workResponsibilityThreeInput={workResponsibilityThreeInput}
                    workResponsibilityFourInput={workResponsibilityFourInput}
                    workDescriptionList="font-light"
                    secondYearStartWorkInput={secondYearStartWorkInput}
                    secondMonthStartWorkInput={secondMonthStartWorkInput}
                    secondYearEndWorkInput={secondYearEndWorkInput}
                    secondMonthEndWorkInput={secondMonthEndWorkInput}
                    secondCurrentlyWorkingCheckboxValue={
                        secondCurrentlyWorkingCheckboxValue
                    }
                    secondJobTitleInput={secondJobTitleInput}
                    secondCompanyInput={secondCompanyInput}
                    secondCityWorkInput={secondCityWorkInput}
                    secondStateWorkInput={secondStateWorkInput}
                    secondWorkResponsibilityOneInput={
                        secondWorkResponsibilityOneInput
                    }
                    secondWorkResponsibilityTwoInput={
                        secondWorkResponsibilityTwoInput
                    }
                    secondWorkResponsibilityThreeInput={
                        secondWorkResponsibilityThreeInput
                    }
                    secondWorkResponsibilityFourInput={
                        secondWorkResponsibilityFourInput
                    }
                    educationDatePeriodContainer="w-56 text-xs"
                    yearStartGraduationInput={yearStartGraduationInput}
                    monthStartGraduationInput={monthStartGraduationInput}
                    schoolNameInput={schoolNameInput}
                    schoolLocationInput={schoolLocationInput}
                    degreeInput={degreeInput}
                    fieldOfStudyInput={fieldOfStudyInput}
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
                        cityHeadingInput={cityHeadingInput}
                        stateHeadingInput={stateHeadingInput}
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
