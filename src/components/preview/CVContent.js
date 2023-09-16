import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';

const CVContent = ({
    fullName,
    firstNameInput,
    lastNameInput,
    profession,
    professionInput,
    address,
    contactInput,
    cityHeadingInput,
    stateHeadingInput,
    countryInput,
    zipCodeInput,
    contactHeading,
    phoneInput,
    emailInput,
    summaryContainer,
    mainBackgroundHeading,
    summary,
    mainBackgroundContainer,
    skillsList,
    skillOneInput,
    skillTwoInput,
    skillThreeInput,
    skillFourInput,
    skillFiveInput,
    stayPeriodContainer,
    workDatePeriodContainer,
    yearStartWorkInput,
    monthStartWorkInput,
    yearEndWorkInput,
    monthEndWorkInput,
    currentlyWorkingCheckboxValue,
    stayDetailContainer,
    stayDetailHeading,
    jobTitleInput,
    institution,
    companyInput,
    cityWorkInput,
    stateWorkInput,
    workDescriptionContainer,
    workResponsibilityOneInput,
    workResponsibilityTwoInput,
    workResponsibilityThreeInput,
    workResponsibilityFourInput,
    workDescriptionList,
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
    educationDatePeriodContainer,
    yearStartGraduationInput,
    monthStartGraduationInput,
    schoolNameInput,
    schoolLocationInput,
    degreeInput,
    fieldOfStudyInput
}) => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';
    const isOnWorkResponsibilityPath = pathname === '/work-responsibility';
    const isOnWorkHistorySummary = pathname === '/work-history-summary';
    const isOnAdditionalWorkHistoryPath =
        pathname === '/additional-work-history';
    const isOnAdditionalWorkResponsibilityPath =
        pathname === '/additional-work-responsibility';
    const isOnEducationPath = pathname === '/education';
    const isOnSkillsPath = pathname === '/skills';

    const workHistoryFormIsSubmitted = !isOnHeadingPath && !isOnWorkHistoryPath;
    const workResponsibilityFormIsSubmitted =
        workHistoryFormIsSubmitted && !isOnWorkResponsibilityPath;
    const workHistorySummaryIsSubmitted =
        workResponsibilityFormIsSubmitted &&
        !isOnWorkHistorySummary &&
        !isOnWorkResponsibilityPath;
    const additionalWorkHistoryFormIsSubmitted =
        workHistorySummaryIsSubmitted && !isOnAdditionalWorkHistoryPath;
    const additionalWorkResponsibilityFormIsSubmitted =
        additionalWorkHistoryFormIsSubmitted &&
        !isOnAdditionalWorkResponsibilityPath;
    const educationFormIsSubmitted =
        additionalWorkResponsibilityFormIsSubmitted && !isOnEducationPath;
    const skillsFormIsSubmitted = educationFormIsSubmitted && !isOnSkillsPath;

    useEffect(() => {
        if (isOnHeadingPath) {
            // add data to localStorage
            window.localStorage.setItem(
                'headingFormData',
                JSON.stringify({
                    firstNameData: firstNameInput,
                    lastNameData: lastNameInput,
                    professionData: professionInput,
                    countryData: countryInput,
                    cityHeadingData: cityHeadingInput,
                    stateHeadingData: stateHeadingInput,
                    zipCodeData: zipCodeInput,
                    phoneData: phoneInput,
                    emailData: emailInput
                })
            );
        } else if (isOnWorkHistoryPath) {
            // add data to localStorage
            window.localStorage.setItem(
                'workHistoryFormData',
                JSON.stringify({
                    yearStartWorkData: yearStartWorkInput,
                    monthStartWorkData: monthStartWorkInput,
                    yearEndWorkData: yearEndWorkInput,
                    monthEndWorkData: monthEndWorkInput,
                    jobTitleData: jobTitleInput,
                    companyData: companyInput,
                    cityWorkData: cityWorkInput,
                    stateWorkData: stateWorkInput,
                    currentlyWorkingCheckboxData: currentlyWorkingCheckboxValue
                })
            );
        } else if (isOnWorkResponsibilityPath) {
            window.localStorage.setItem(
                'workResponsibilityFormData',
                JSON.stringify({
                    workResponsibilityOneData: workResponsibilityOneInput,
                    workResponsibilityTwoData: workResponsibilityTwoInput,
                    workResponsibilityThreeData: workResponsibilityThreeInput,
                    workResponsibilityFourData: workResponsibilityFourInput
                })
            );
        } else if (isOnAdditionalWorkHistoryPath) {
            window.localStorage.setItem(
                'additionalWorkHistoryFormData',
                JSON.stringify({
                    secondYearStartWorkData: secondYearStartWorkInput,
                    secondMonthStartWorkData: secondMonthStartWorkInput,
                    secondYearEndWorkData: secondYearEndWorkInput,
                    secondMonthEndWorkData: secondMonthEndWorkInput,
                    secondJobTitleData: secondJobTitleInput,
                    secondCompanyData: secondCompanyInput,
                    secondCityWorkData: secondCityWorkInput,
                    secondStateWorkData: secondStateWorkInput,
                    secondCurrentlyWorkingCheckboxData:
                        secondCurrentlyWorkingCheckboxValue
                })
            );
        } else if (isOnAdditionalWorkResponsibilityPath) {
            window.localStorage.setItem(
                'additionalWorkResponsibilityFormData',
                JSON.stringify({
                    secondWorkResponsibilityOneData:
                        secondWorkResponsibilityOneInput,
                    secondWorkResponsibilityTwoData:
                        secondWorkResponsibilityTwoInput,
                    secondWorkResponsibilityThreeData:
                        secondWorkResponsibilityThreeInput,
                    secondWorkResponsibilityFourData:
                        secondWorkResponsibilityFourInput
                })
            );
        } else if (isOnEducationPath) {
            window.localStorage.setItem(
                'educationFormData',
                JSON.stringify({
                    yearStartGraduationData: yearStartGraduationInput,
                    monthStartGraduationData: monthStartGraduationInput,
                    schoolNameData: schoolNameInput,
                    schoolLocationData: schoolLocationInput,
                    degreeData: degreeInput,
                    fieldOfStudyData: fieldOfStudyInput
                })
            );
        } else if (isOnSkillsPath) {
            window.localStorage.setItem(
                'skillsFormData',
                JSON.stringify({
                    skillOneData: skillOneInput,
                    skillTwoData: skillTwoInput,
                    skillThreeData: skillThreeInput,
                    skillFourData: skillFourInput,
                    skillFiveData: skillFiveInput
                })
            );
        }
    }, [
        isOnHeadingPath,
        firstNameInput,
        lastNameInput,
        professionInput,
        contactInput,
        cityHeadingInput,
        stateHeadingInput,
        countryInput,
        zipCodeInput,
        phoneInput,
        emailInput,
        isOnWorkHistoryPath,
        yearStartWorkInput,
        monthStartWorkInput,
        yearEndWorkInput,
        monthEndWorkInput,
        currentlyWorkingCheckboxValue,
        isOnWorkResponsibilityPath,
        jobTitleInput,
        companyInput,
        cityWorkInput,
        stateWorkInput,
        workResponsibilityOneInput,
        workResponsibilityTwoInput,
        workResponsibilityThreeInput,
        workResponsibilityFourInput,
        isOnAdditionalWorkHistoryPath,
        secondYearStartWorkInput,
        secondMonthStartWorkInput,
        secondYearEndWorkInput,
        secondMonthEndWorkInput,
        secondCurrentlyWorkingCheckboxValue,
        isOnAdditionalWorkResponsibilityPath,
        secondJobTitleInput,
        secondCompanyInput,
        secondCityWorkInput,
        secondStateWorkInput,
        secondWorkResponsibilityOneInput,
        secondWorkResponsibilityTwoInput,
        secondWorkResponsibilityThreeInput,
        secondWorkResponsibilityFourInput,
        isOnEducationPath,
        yearStartGraduationInput,
        monthStartGraduationInput,
        schoolNameInput,
        schoolLocationInput,
        degreeInput,
        fieldOfStudyInput,
        isOnSkillsPath,
        skillOneInput,
        skillTwoInput,
        skillThreeInput,
        skillFourInput,
        skillFiveInput
    ]);

    const getFormData = (formData) => {
        // make values of properties accessible
        const data = JSON.parse(window.localStorage.getItem(formData));
        // if form data is submitted, return form data
        return data ? data : '';
    };

    const {
        firstNameData,
        lastNameData,
        professionData,
        cityHeadingData,
        stateHeadingData,
        countryData,
        zipCodeData,
        phoneData,
        emailData
    } = getFormData('headingFormData');

    const {
        yearStartWorkData,
        monthStartWorkData,
        yearEndWorkData,
        monthEndWorkData,
        jobTitleData,
        companyData,
        cityWorkData,
        stateWorkData,
        currentlyWorkingCheckboxData
    } = getFormData('workHistoryFormData');

    const {
        workResponsibilityOneData,
        workResponsibilityTwoData,
        workResponsibilityThreeData,
        workResponsibilityFourData
    } = getFormData('workResponsibilityFormData');

    const {
        secondYearStartWorkData,
        secondMonthStartWorkData,
        secondYearEndWorkData,
        secondMonthEndWorkData,
        secondJobTitleData,
        secondCompanyData,
        secondCityWorkData,
        secondStateWorkData,
        secondCurrentlyWorkingCheckboxData
    } = getFormData('additionalWorkHistoryFormData');

    const {
        secondWorkResponsibilityOneData,
        secondWorkResponsibilityTwoData,
        secondWorkResponsibilityThreeData,
        secondWorkResponsibilityFourData
    } = getFormData('additionalWorkResponsibilityFormData');

    const {
        yearStartGraduationData,
        monthStartGraduationData,
        schoolNameData,
        schoolLocationData,
        degreeData,
        fieldOfStudyData
    } = getFormData('educationFormData');

    const {
        skillOneData,
        skillTwoData,
        skillThreeData,
        skillFourData,
        skillFiveData
    } = getFormData('skillsFormData');

    // handle addAnotherWorkPosition for additional work history and responsibility forms state
    if (workHistorySummaryIsSubmitted) {
        window.localStorage.setItem(
            'addAnotherWorkPositionData',
            JSON.stringify({
                addAnotherWorkPosition: true
            })
        );
    } else {
        window.localStorage.setItem(
            'addAnotherWorkPositionData',
            JSON.stringify({
                addAnotherWorkPosition: false
            })
        );
    }

    const { addAnotherWorkPosition } = getFormData(
        'addAnotherWorkPositionData'
    );

    const hasNoAddress =
        !isOnHeadingPath &&
        !cityHeadingData &&
        !stateHeadingData &&
        !countryData &&
        !zipCodeData;
    const hasNoPhone = !isOnHeadingPath && !phoneData;
    const hasNoEmail = !isOnHeadingPath && !emailData;
    const hasNoHeading =
        !isOnHeadingPath && hasNoAddress && hasNoPhone && hasNoEmail;

    const hasWorkStartDate = yearStartWorkData && monthStartWorkData;
    const hasWorkEndDate = yearEndWorkData && monthEndWorkData;
    const isMissingWorkStartDate =
        !hasWorkStartDate && currentlyWorkingCheckboxData;
    const isMissingWorkEndDate =
        !hasWorkEndDate && !currentlyWorkingCheckboxData;
    const workStartDateIsOmitted = hasWorkEndDate && !hasWorkStartDate;
    const hasNoWorkDatePeriod =
        workHistoryFormIsSubmitted &&
        (isMissingWorkStartDate ||
            isMissingWorkEndDate ||
            workStartDateIsOmitted);
    const hasDatesButNotCurrentlyWorking =
        !currentlyWorkingCheckboxData && hasWorkEndDate && hasWorkStartDate;
    const hasNoWorkHistory =
        workHistoryFormIsSubmitted && !jobTitleData && !companyData;

    const secondHasStartDate =
        secondYearStartWorkData && secondMonthStartWorkData;
    const secondHasEndDate = secondYearEndWorkData && secondMonthEndWorkData;
    const secondIsMissingStartDate =
        !secondHasStartDate && secondCurrentlyWorkingCheckboxData;
    const secondIsMissingEndDate =
        !secondHasEndDate && !secondCurrentlyWorkingCheckboxData;
    const secondStartDateIsOmitted = secondHasEndDate && !secondHasStartDate;
    const secondHasNoWorkDatePeriod =
        addAnotherWorkPosition &&
        !isOnAdditionalWorkHistoryPath &&
        (secondIsMissingStartDate ||
            secondIsMissingEndDate ||
            secondStartDateIsOmitted);
    const secondHasDatesButNotCurrentlyWorking =
        !secondCurrentlyWorkingCheckboxData &&
        secondHasEndDate &&
        secondHasStartDate;
    const hasNoSecondWorkHistory =
        additionalWorkHistoryFormIsSubmitted &&
        !secondJobTitleData &&
        !secondCompanyData;

    const hasEducationStartDate =
        yearStartGraduationData && monthStartGraduationData;
    const educationStartDateIsOmitted = !hasEducationStartDate;
    const hasNoEducationDatePeriod =
        educationFormIsSubmitted && educationStartDateIsOmitted;
    const hasNoSchoolNameAndLocation =
        educationFormIsSubmitted && !schoolNameData && !schoolLocationData;
    const hasNoEducation =
        educationFormIsSubmitted & !degreeData && !fieldOfStudyData;

    const hasNoSkills =
        skillsFormIsSubmitted &&
        !skillOneData &&
        !skillTwoData &&
        !skillThreeData &&
        !skillFourData &&
        !skillFiveData;

    const defaultFirstName = 'Afonso';
    const defaultLastName = 'Santos';
    const defaultPhone = '(238) 513-57521';
    const defaultEmail = 'afonsofrancisco@yahoo.com';
    const defaultHeadingAddress = 'Rampa São Januário, Praia, Cabo Verde, 7600';
    const defaultJobTitle = 'Marketing Intern';
    const defaultWorkAddress = 'XYZ Company, City, State';
    const defaultSkillOne =
        'Proficient in Google Analytics, SEO, and social media marketing tools';
    const defaultSkillTwo =
        'Strong analytical skills and ability to interpret market trends';
    const defaultSkillThree =
        '    Excellent written and verbal communication skills';
    const defaultSkillFour = 'Creative thinking and problem-solving abilities';
    const defaultSkillFive = 'Team player with strong interpersonal skills';
    const defaultWorkResponsibilityOne =
        'Assisted the marketing team in developing and implementing social media marketing campaigns, resulting in a 20% increase in website traffic.';
    const defaultWorkResponsibilityTwo =
        'Conducted market research and competitor analysis to identify new target demographics and improve marketing strategies.';
    const defaultWorkResponsibilityThree =
        'Created engaging content for social media platforms, increasing follower count by 15%.';
    const defaultWorkResponsibilityFour =
        'Assisted in organizing and executing marketing events, resulting in a 30% increase in lead generation.';
    const defaultSecondJobTitle = 'Sales Representative';
    const defaultSecondWorkAddress = 'ABC Retail Store, City, State';
    const defaultSecondWorkResponsibilityOne =
        'Provided exceptional customer service, resulting in a 15% increase in customer satisfaction ratings.';
    const defaultSecondWorkResponsibilityTwo =
        'Achieved and exceeded monthly sales targets by 20% through effective product knowledge and persuasive selling techniques.';
    const defaultSecondWorkResponsibilityThree =
        'Assisted in visual merchandising and store displays to enhance the customer shopping experience.';
    const defaultSecondWorkResponsibilityFour =
        'Assisted in visual merchandising and store displays to enhance the customer shopping experienceCollaborated with team members to resolve customer complaints and ensure smooth store operations.';
    const defaultDegreeAndFieldOfStudy =
        'Bachelor of Business Administration, Marketing';
    const defaultSchoolAddress = 'ABC University, City, State';

    const generateTitle = (
        path,
        titleDataOrder,
        titleInputOrder,
        defaultTitle,
        additionalTitleDataOrder,
        additionalTitleInputOrder
    ) => {
        let title = '';

        // if form is submitted already, display titleDataOrder
        if (path) {
            if (titleDataOrder || additionalTitleDataOrder) {
                title = titleDataOrder || additionalTitleDataOrder;
            } else {
                title = titleDataOrder;
            }

            if (titleDataOrder) {
                if (additionalTitleDataOrder) {
                    title = `${titleDataOrder}, ${additionalTitleDataOrder}`;
                }
            }
        } else {
            if (titleInputOrder || additionalTitleInputOrder) {
                title =
                    titleInputOrder ||
                    additionalTitleInputOrder ||
                    defaultTitle;
            } else {
                title = titleInputOrder || defaultTitle;
            }

            if (titleInputOrder) {
                if (additionalTitleInputOrder) {
                    title =
                        `${titleInputOrder}, ${additionalTitleInputOrder}` ||
                        defaultTitle;
                }
            }
        }

        return title;
    };

    const generateAddress = (a, b, c, d, defaultValue) => {
        let address = '';

        if (a || b || c || d) {
            address += a || b || c || d;
        } else {
            address = defaultValue;
        }

        if (a) {
            if (b || c || d) {
                address += `, ${b || c || d}`;
            }
        }

        if (b) {
            if (c || d) {
                address += `, ${c || d}`;
            }
        }

        if (c) {
            if (d) {
                address += `, ${d}`;
            }
        }

        return address;
    };

    const handleAddressGeneration = (
        path,
        companyDataOrder,
        cityWorkDataOrder,
        stateWorkDataOrder,
        defaultWorkAddressOrder,
        companyInputOrder,
        cityWorkInputOrder,
        stateWorkInputOrder
    ) => {
        // display localStorage data if form is submitted already
        return path
            ? generateAddress(
                  companyDataOrder,
                  cityWorkDataOrder,
                  stateWorkDataOrder,
                  null,
                  defaultWorkAddressOrder
              )
            : generateAddress(
                  companyInputOrder,
                  cityWorkInputOrder,
                  stateWorkInputOrder,
                  null,
                  defaultWorkAddressOrder
              );
    };

    const generateWorkDatePeriod = (
        path,
        currentlyWorkingCheckboxDataOrder,
        yearStartWorkDataOrder,
        monthStartWorkDataOrder,
        yearEndWorkDataOrder,
        monthEndWorkDataOrder,
        currentlyWorkingCheckboxValueOrder,
        hasDatesButNotCurrentlyWorkingOrder,
        yearStartWorkInputOrder,
        monthStartWorkInputOrder,
        yearEndWorkInputOrder,
        monthEndWorkInputOrder
    ) => {
        let workDatePeriod = '';

        if (path) {
            if (currentlyWorkingCheckboxDataOrder) {
                workDatePeriod += `${yearStartWorkDataOrder}-${monthStartWorkDataOrder}-Current`;
            } else if (hasDatesButNotCurrentlyWorkingOrder) {
                workDatePeriod += `${yearStartWorkDataOrder}-${monthStartWorkDataOrder}-${yearEndWorkDataOrder}-${monthEndWorkDataOrder}`;
            }
        } else if (
            currentlyWorkingCheckboxValueOrder ||
            // if section is on work history and currently working is checked
            (currentlyWorkingCheckboxValueOrder &&
                !currentlyWorkingCheckboxValueOrder)
        ) {
            workDatePeriod += `${yearStartWorkInputOrder || '2020'}-${
                monthStartWorkInputOrder || '04'
            }-Current`;
            // else, display year and month inputs on work history section
        } else {
            workDatePeriod += `${yearStartWorkInputOrder || '2020'}-${
                monthStartWorkInputOrder || '04'
            }-${yearEndWorkInputOrder || '2023'}-${
                monthEndWorkInputOrder || '06'
            }`;
        }

        return workDatePeriod;
    };

    const generateEducationDatePeriod = (
        educationFormOrderIsSubmitted,
        yearStartGraduationDataOrder,
        monthStartGraduationDataOrder,
        yearStartGraduationInputOrder,
        monthStartGraduationInputOrder
    ) => {
        let graduationDatePeriod = '';

        if (educationFormOrderIsSubmitted) {
            graduationDatePeriod += `${yearStartGraduationDataOrder}-${monthStartGraduationDataOrder}`;
        } else {
            graduationDatePeriod += `${
                yearStartGraduationInputOrder || '2023'
            }-${monthStartGraduationInputOrder || 'June'}`;
        }

        return graduationDatePeriod;
    };

    const generateBulletPoint = (
        bulletPointData,
        formOrderIsSubmitted,
        bulletPointInput,
        defaultWorkResponsibility
    ) => {
        let workResponsibility = '';

        if (formOrderIsSubmitted) {
            if (bulletPointData) {
                // if workResponsibilityData has is empty, put no value, else, show workResponsibilityData
                workResponsibility = !bulletPointData.trim()
                    ? ''
                    : bulletPointData;
            }
        } else {
            workResponsibility = bulletPointInput || defaultWorkResponsibility;
        }

        return workResponsibility;
    };

    const manageBulletPointStyles = (
        workResponsibility,
        formOrderIsSubmitted
    ) => {
        let styles = '';

        // if workResponsibility is submitted empty
        if (
            generateBulletPoint(workResponsibility, formOrderIsSubmitted) === ''
        ) {
            // add default styles
            styles = { workDescriptionList };
        } else {
            // add list-style-type: disc style
            styles = `${workDescriptionList} list-disc`;
        }

        return styles;
    };

    return (
        <>
            {hasNoHeading ? (
                ''
            ) : (
                <>
                    <h1 className={fullName}>
                        <span>
                            {generateTitle(
                                !isOnHeadingPath,
                                firstNameData,
                                firstNameInput,
                                defaultFirstName
                            )}{' '}
                        </span>
                        <span>
                            {generateTitle(
                                !isOnHeadingPath,
                                lastNameData,
                                lastNameInput,
                                defaultLastName
                            )}
                        </span>
                    </h1>
                    <h6 className={profession}>
                        {generateTitle(
                            !isOnHeadingPath,
                            professionData,
                            professionInput
                        )}
                    </h6>
                    <h6 className={address}>
                        {hasNoAddress ? '' : 'Address:'}
                        {hasNoAddress ? (
                            ''
                        ) : (
                            <span className={contactInput}>
                                {generateAddress(
                                    cityHeadingData,
                                    stateHeadingData,
                                    countryData,
                                    zipCodeData,
                                    defaultHeadingAddress
                                )}
                            </span>
                        )}
                    </h6>
                    <h6 className={contactHeading}>
                        {hasNoPhone ? '' : 'Phone:'}
                        {hasNoPhone ? (
                            ''
                        ) : (
                            <span className={contactInput}>
                                {generateTitle(
                                    !isOnHeadingPath,
                                    phoneData,
                                    phoneInput,
                                    defaultPhone
                                )}
                            </span>
                        )}
                    </h6>
                    <h6 className={contactHeading}>
                        {hasNoEmail ? '' : 'Email:'}
                        <span className={contactInput}>
                            {hasNoEmail ? (
                                ''
                            ) : (
                                <span>
                                    {generateTitle(
                                        !isOnHeadingPath,
                                        emailData,
                                        emailInput,
                                        defaultEmail
                                    )}
                                </span>
                            )}
                        </span>
                    </h6>
                </>
            )}
            <div className={summaryContainer}>
                <h6 className={mainBackgroundHeading}>Summary</h6>
                <h6 className={summary}>
                    Results-driven professional with a passion for marketing
                    seeking a challenging position in a dynamic organization to
                    utilize my skills in digital marketing and brand management.
                </h6>
            </div>
            <div className={mainBackgroundContainer}>
                {hasNoSkills ? (
                    ''
                ) : (
                    <>
                        <h6 className={mainBackgroundHeading}>Skills</h6>
                        <ul className={skillsList}>
                            <li
                                className={`${manageBulletPointStyles(
                                    skillOneData,
                                    skillsFormIsSubmitted
                                )} !font-normal`}
                            >
                                {generateBulletPoint(
                                    skillOneData,
                                    skillsFormIsSubmitted,
                                    skillOneInput,
                                    defaultSkillOne
                                )}
                            </li>
                            <li
                                className={`${manageBulletPointStyles(
                                    skillTwoData,
                                    skillsFormIsSubmitted
                                )} !font-normal`}
                            >
                                {generateBulletPoint(
                                    skillTwoData,
                                    skillsFormIsSubmitted,
                                    skillTwoInput,
                                    defaultSkillTwo
                                )}
                            </li>
                            <li
                                className={`${manageBulletPointStyles(
                                    skillThreeData,
                                    skillsFormIsSubmitted
                                )} !font-normal`}
                            >
                                {generateBulletPoint(
                                    skillThreeData,
                                    skillsFormIsSubmitted,
                                    skillThreeInput,
                                    defaultSkillThree
                                )}
                            </li>
                            <li
                                className={`${manageBulletPointStyles(
                                    skillFourData,
                                    skillsFormIsSubmitted
                                )} !font-normal`}
                            >
                                {generateBulletPoint(
                                    skillFourData,
                                    skillsFormIsSubmitted,
                                    skillFourInput,
                                    defaultSkillFour
                                )}
                            </li>
                            <li
                                className={`${manageBulletPointStyles(
                                    skillFiveData,
                                    skillsFormIsSubmitted
                                )} !font-normal`}
                            >
                                {generateBulletPoint(
                                    skillFiveData,
                                    skillsFormIsSubmitted,
                                    skillFiveInput,
                                    defaultSkillFive
                                )}
                            </li>
                        </ul>
                    </>
                )}
                {hasNoWorkHistory ? (
                    ''
                ) : (
                    <>
                        <h6 className={mainBackgroundHeading}>Work History</h6>
                        <div className={stayPeriodContainer}>
                            {hasNoWorkDatePeriod ? (
                                ''
                            ) : (
                                <div className={workDatePeriodContainer}>
                                    <h6>
                                        {generateWorkDatePeriod(
                                            workHistoryFormIsSubmitted,
                                            currentlyWorkingCheckboxData,
                                            yearStartWorkData,
                                            monthStartWorkData,
                                            yearEndWorkData,
                                            monthEndWorkData,
                                            currentlyWorkingCheckboxValue,
                                            hasDatesButNotCurrentlyWorking,
                                            yearStartWorkInput,
                                            monthStartWorkInput,
                                            yearEndWorkInput,
                                            monthEndWorkInput
                                        )}
                                    </h6>
                                </div>
                            )}
                            <div className={stayDetailContainer}>
                                <div className={stayDetailHeading}>
                                    {generateTitle(
                                        workHistoryFormIsSubmitted,
                                        jobTitleData,
                                        jobTitleInput,
                                        defaultJobTitle
                                    )}
                                </div>
                                <div>
                                    <h6 className={institution}>
                                        <span>
                                            {handleAddressGeneration(
                                                workHistoryFormIsSubmitted,
                                                companyData,
                                                cityWorkData,
                                                stateWorkData,
                                                defaultWorkAddress,
                                                companyInput,
                                                cityWorkInput,
                                                stateWorkInput
                                            )}
                                        </span>
                                    </h6>
                                    <ul className={workDescriptionContainer}>
                                        <li
                                            className={manageBulletPointStyles(
                                                workResponsibilityOneData,
                                                workResponsibilityFormIsSubmitted
                                            )}
                                        >
                                            {generateBulletPoint(
                                                workResponsibilityOneData,
                                                workResponsibilityFormIsSubmitted,
                                                workResponsibilityOneInput,
                                                defaultWorkResponsibilityOne
                                            )}
                                        </li>
                                        <li
                                            className={manageBulletPointStyles(
                                                workResponsibilityTwoData,
                                                workResponsibilityFormIsSubmitted
                                            )}
                                        >
                                            {generateBulletPoint(
                                                workResponsibilityTwoData,
                                                workResponsibilityFormIsSubmitted,
                                                workResponsibilityTwoInput,
                                                defaultWorkResponsibilityTwo
                                            )}
                                        </li>
                                        <li
                                            className={manageBulletPointStyles(
                                                workResponsibilityThreeData,
                                                workResponsibilityFormIsSubmitted
                                            )}
                                        >
                                            {generateBulletPoint(
                                                workResponsibilityThreeData,
                                                workResponsibilityFormIsSubmitted,
                                                workResponsibilityThreeInput,
                                                defaultWorkResponsibilityThree
                                            )}
                                        </li>
                                        <li
                                            className={manageBulletPointStyles(
                                                workResponsibilityFourData,
                                                workResponsibilityFormIsSubmitted
                                            )}
                                        >
                                            {generateBulletPoint(
                                                workResponsibilityFourData,
                                                workResponsibilityFormIsSubmitted,
                                                workResponsibilityFourInput,
                                                defaultWorkResponsibilityFour
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {addAnotherWorkPosition &&
                !hasNoWorkHistory &&
                !hasNoSecondWorkHistory ? (
                    <div className={stayPeriodContainer}>
                        {secondHasNoWorkDatePeriod ? (
                            ''
                        ) : (
                            <div className={workDatePeriodContainer}>
                                <h6>
                                    {generateWorkDatePeriod(
                                        additionalWorkHistoryFormIsSubmitted,
                                        secondCurrentlyWorkingCheckboxData,
                                        secondYearStartWorkData,
                                        secondMonthStartWorkData,
                                        secondYearEndWorkData,
                                        secondMonthEndWorkData,
                                        secondCurrentlyWorkingCheckboxValue,
                                        secondHasDatesButNotCurrentlyWorking,
                                        secondYearStartWorkInput,
                                        secondMonthStartWorkInput,
                                        secondYearEndWorkInput,
                                        secondMonthEndWorkInput
                                    )}
                                </h6>
                            </div>
                        )}
                        <div className={stayDetailContainer}>
                            <div className={stayDetailHeading}>
                                {generateTitle(
                                    additionalWorkHistoryFormIsSubmitted,
                                    secondJobTitleData,
                                    secondJobTitleInput,
                                    defaultSecondJobTitle
                                )}
                            </div>
                            <div>
                                <h6 className={institution}>
                                    <span>
                                        {handleAddressGeneration(
                                            additionalWorkHistoryFormIsSubmitted,
                                            secondCompanyData,
                                            secondCityWorkData,
                                            secondStateWorkData,
                                            defaultSecondWorkAddress,
                                            secondCompanyInput,
                                            secondCityWorkInput,
                                            secondStateWorkInput
                                        )}
                                    </span>
                                </h6>
                                <ul className={workDescriptionContainer}>
                                    <li
                                        className={manageBulletPointStyles(
                                            secondWorkResponsibilityOneData,
                                            additionalWorkResponsibilityFormIsSubmitted
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondWorkResponsibilityOneData,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondWorkResponsibilityOneInput,
                                            defaultSecondWorkResponsibilityOne
                                        )}
                                    </li>
                                    <li
                                        className={manageBulletPointStyles(
                                            secondWorkResponsibilityTwoData,
                                            additionalWorkResponsibilityFormIsSubmitted
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondWorkResponsibilityTwoData,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondWorkResponsibilityTwoInput,
                                            defaultSecondWorkResponsibilityTwo
                                        )}
                                    </li>
                                    <li
                                        className={manageBulletPointStyles(
                                            secondWorkResponsibilityThreeData,
                                            additionalWorkResponsibilityFormIsSubmitted
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondWorkResponsibilityThreeData,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondWorkResponsibilityThreeInput,
                                            defaultSecondWorkResponsibilityThree
                                        )}
                                    </li>
                                    <li
                                        className={manageBulletPointStyles(
                                            secondWorkResponsibilityFourData,
                                            additionalWorkResponsibilityFormIsSubmitted
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondWorkResponsibilityFourData,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondWorkResponsibilityFourInput,
                                            defaultSecondWorkResponsibilityFour
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {hasNoEducation ? (
                    ''
                ) : (
                    <>
                        <h6 className={mainBackgroundHeading}>Education</h6>
                        <div className={stayPeriodContainer}>
                            {hasNoEducationDatePeriod ? (
                                ''
                            ) : (
                                <div className={educationDatePeriodContainer}>
                                    <h6>
                                        {generateEducationDatePeriod(
                                            educationFormIsSubmitted,
                                            yearStartGraduationData,
                                            monthStartGraduationData,
                                            yearStartGraduationInput,
                                            monthStartGraduationInput
                                        )}
                                    </h6>
                                </div>
                            )}
                            <div className={stayDetailContainer}>
                                <h6 className={stayDetailHeading}>
                                    {generateTitle(
                                        educationFormIsSubmitted,
                                        degreeData,
                                        degreeInput,
                                        defaultDegreeAndFieldOfStudy,
                                        fieldOfStudyData,
                                        fieldOfStudyInput
                                    )}
                                </h6>
                                <h6 className={institution}>
                                    {hasNoSchoolNameAndLocation
                                        ? ''
                                        : handleAddressGeneration(
                                              educationFormIsSubmitted,
                                              schoolNameData,
                                              schoolLocationData,
                                              null,
                                              defaultSchoolAddress,
                                              schoolNameInput,
                                              schoolLocationInput,
                                              null
                                          )}
                                </h6>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CVContent;
