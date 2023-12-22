import CVContent from './CVContent';

const CVModal = ({
    componentRef,
    modalSizing,
    contentStyle,
    firstNameInput,
    lastNameInput,
    professionInput,
    cityHeadingInput,
    stateHeadingInput,
    countryInput,
    zipCodeInput,
    phoneInput,
    emailInput,
    summaryInput,
    skillOneInput,
    skillTwoInput,
    skillThreeInput,
    skillFourInput,
    skillFiveInput,
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
    degreeInput,
    fieldOfStudyInput,
    schoolNameInput,
    schoolLocationInput,
    secondYearStartGraduationInput,
    secondMonthStartGraduationInput,
    secondDegreeInput,
    secondFieldOfStudyInput,
    secondSchoolNameInput,
    secondSchoolLocationInput
}) => {
    return (
        <div
            className={`${modalSizing} select-none overflow-y-auto break-all rounded-lg bg-zinc-200`}
        >
            <div ref={componentRef} className="bg-white p-10">
                <CVContent
                    textContainer="h-full rounded p-10 overflow-auto bg-white"
                    fullName="font-bold text-5xl"
                    firstNameInput={firstNameInput}
                    lastNameInput={lastNameInput}
                    profession="text-2xl"
                    professionInput={professionInput}
                    address="mt-5 text-lg font-medium"
                    contactHeading="text-lg font-medium"
                    contactInput="font-normal ml-1"
                    countryInput={countryInput}
                    cityHeadingInput={cityHeadingInput}
                    stateHeadingInput={stateHeadingInput}
                    zipCodeInput={zipCodeInput}
                    phoneInput={phoneInput}
                    emailInput={emailInput}
                    summaryContainer="mt-10"
                    mainBackgroundHeading="font-bold border-b-2 text-xl mt-10 italic"
                    summary="break-all text-xl mt-5"
                    summaryInput={summaryInput}
                    mainBackgroundContainer="mt-5"
                    skillsList="break-all ml-14 mt-2 text-lg"
                    skillOneInput={skillOneInput}
                    skillTwoInput={skillTwoInput}
                    skillThreeInput={skillThreeInput}
                    skillFourInput={skillFourInput}
                    skillFiveInput={skillFiveInput}
                    stayPeriodContainer="mt-5 flex"
                    workDatePeriodContainer="text-lg w-96"
                    yearStartWorkInput={yearStartWorkInput}
                    monthStartWorkInput={monthStartWorkInput}
                    yearEndWorkInput={yearEndWorkInput}
                    monthEndWorkInput={monthEndWorkInput}
                    currentlyWorkingCheckboxValue={
                        currentlyWorkingCheckboxValue
                    }
                    stayDetailContainer="w-full text-lg"
                    stayDetailHeading="text-xl"
                    jobTitleInput={jobTitleInput}
                    institution="mt-1 italic font-light"
                    companyInput={companyInput}
                    cityWorkInput={cityWorkInput}
                    stateWorkInput={stateWorkInput}
                    workDescriptionContainer="break-all ml-14 mt-2"
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
                    educationDatePeriodContainer="text-lg w-96"
                    yearStartGraduationInput={yearStartGraduationInput}
                    monthStartGraduationInput={monthStartGraduationInput}
                    degreeInput={degreeInput}
                    fieldOfStudyInput={fieldOfStudyInput}
                    schoolNameInput={schoolNameInput}
                    schoolLocationInput={schoolLocationInput}
                    secondYearStartGraduationInput={
                        secondYearStartGraduationInput
                    }
                    secondMonthStartGraduationInput={
                        secondMonthStartGraduationInput
                    }
                    secondDegreeInput={secondDegreeInput}
                    secondFieldOfStudyInput={secondFieldOfStudyInput}
                    secondSchoolNameInput={secondSchoolNameInput}
                    secondSchoolLocationInput={secondSchoolLocationInput}
                />
            </div>
        </div>
    );
};

export default CVModal;
