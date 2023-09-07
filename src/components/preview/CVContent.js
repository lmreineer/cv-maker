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
    bulletPointOneInput,
    bulletPointTwoInput,
    bulletPointThreeInput,
    bulletPointFourInput,
    workDescriptionList,
    addAnotherWorkPosition,
    secondYearStartWorkInput,
    secondMonthStartWorkInput,
    secondYearEndWorkInput,
    secondMonthEndWorkInput,
    secondCurrentlyWorkingCheckboxValue,
    secondJobTitleInput,
    secondCompanyInput,
    secondCityWorkInput,
    secondStateWorkInput,
    secondBulletPointOneInput,
    secondBulletPointTwoInput,
    secondBulletPointThreeInput,
    secondBulletPointFourInput,
    educationDatePeriodContainer
}) => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';
    const isOnWorkResponsibilityPath = pathname === '/work-responsibility';
    const workHistoryFormIsSubmitted = !isOnHeadingPath && !isOnWorkHistoryPath;
    const workResponsibilityFormIsSubmitted =
        workHistoryFormIsSubmitted && !isOnWorkResponsibilityPath;
    const isOnAdditionalWorkHistoryPath =
        pathname === '/additional-work-history';
    const isOnAdditionalWorkResponsibilityPath =
        pathname === '/additional-work-responsibility';
    const additionalWorkHistoryFormIsSubmitted =
        !isOnHeadingPath && !isOnAdditionalWorkHistoryPath;
    const additionalWorkResponsibilityFormIsSubmitted =
        additionalWorkHistoryFormIsSubmitted &&
        !isOnAdditionalWorkResponsibilityPath;

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
                    jobTitleData: jobTitleInput,
                    companyData: companyInput,
                    cityWorkData: cityWorkInput,
                    stateWorkData: stateWorkInput,
                    yearStartWorkData: yearStartWorkInput,
                    monthStartWorkData: monthStartWorkInput,
                    yearEndWorkData: yearEndWorkInput,
                    monthEndWorkData: monthEndWorkInput,
                    currentlyWorkingCheckboxData: currentlyWorkingCheckboxValue
                })
            );
        } else if (isOnWorkResponsibilityPath) {
            window.localStorage.setItem(
                'workResponsibilityFormData',
                JSON.stringify({
                    bulletPointOneData: bulletPointOneInput,
                    bulletPointTwoData: bulletPointTwoInput,
                    bulletPointThreeData: bulletPointThreeInput,
                    bulletPointFourData: bulletPointFourInput
                })
            );
        } else if (isOnAdditionalWorkHistoryPath) {
            window.localStorage.setItem(
                'additionalWorkHistoryFormData',
                JSON.stringify({
                    secondJobTitle: secondJobTitleInput,
                    secondCompany: secondCompanyInput,
                    secondCityWork: secondCityWorkInput,
                    secondStateWork: secondStateWorkInput,
                    secondYearStartWork: secondYearStartWorkInput,
                    secondMonthStartWork: secondMonthStartWorkInput,
                    secondYearEndWork: secondYearEndWorkInput,
                    secondMonthEndWork: secondMonthEndWorkInput,
                    secondCurrentlyWorkingCheckboxValue:
                        secondCurrentlyWorkingCheckboxValue
                })
            );
        } else if (isOnAdditionalWorkResponsibilityPath) {
            window.localStorage.setItem(
                'additionalWorkResponsibilityFormData',
                JSON.stringify({
                    secondBulletPointOneData: secondBulletPointOneInput,
                    secondBulletPointTwoData: secondBulletPointTwoInput,
                    secondBulletPointThreeData: secondBulletPointThreeInput,
                    secondBulletPointFourData: secondBulletPointFourInput
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
        bulletPointOneInput,
        bulletPointTwoInput,
        bulletPointThreeInput,
        bulletPointFourInput,
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
        secondBulletPointOneInput,
        secondBulletPointTwoInput,
        secondBulletPointThreeInput,
        secondBulletPointFourInput
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
        jobTitleData,
        companyData,
        cityWorkData,
        stateWorkData,
        yearStartWorkData,
        monthStartWorkData,
        yearEndWorkData,
        monthEndWorkData,
        currentlyWorkingCheckboxData
    } = getFormData('workHistoryFormData');

    const {
        bulletPointOneData,
        bulletPointTwoData,
        bulletPointThreeData,
        bulletPointFourData
    } = getFormData('workResponsibilityFormData');

    const {
        secondJobTitleData,
        secondCompanyData,
        secondCityWorkData,
        secondStateWorkData,
        secondYearStartWorkData,
        secondMonthStartWorkData,
        secondYearEndWorkData,
        secondMonthEndWorkData,
        secondCurrentlyWorkingCheckboxData
    } = getFormData('additionalWorkHistoryFormData');

    const {
        secondBulletPointOneData,
        secondBulletPointTwoData,
        secondBulletPointThreeData,
        secondBulletPointFourData
    } = getFormData('additionalWorkResponsibilityFormData');

    const isCurrentlyWorkingData = currentlyWorkingCheckboxData === true;
    const isCurrentlyWorkingValue = currentlyWorkingCheckboxValue === true;

    const secondIsCurrentlyWorkingData =
        secondCurrentlyWorkingCheckboxData === true;
    const secondIsCurrentlyWorkingValue =
        secondCurrentlyWorkingCheckboxValue === true;

    const hasNoAddress =
        !isOnHeadingPath &&
        !cityHeadingData &&
        !stateHeadingData &&
        !countryData &&
        !zipCodeData;
    const hasNoPhone = !isOnHeadingPath && !phoneData;

    const hasStartDate = yearStartWorkData && monthStartWorkData;
    const hasEndDate = yearEndWorkData && monthEndWorkData;
    const isMissingStartDate = !hasStartDate && isCurrentlyWorkingData;
    const isMissingEndDate = !hasEndDate && !isCurrentlyWorkingData;
    const startDateIsOmitted = hasEndDate && !hasStartDate;

    const hasNoWorkDatePeriod =
        !isOnHeadingPath &&
        !isOnWorkHistoryPath &&
        (isMissingStartDate || isMissingEndDate || startDateIsOmitted);
    const hasDatesButNotCurrentlyWorking =
        !isCurrentlyWorkingData && hasEndDate && hasStartDate;

    const secondHasStartDate =
        secondYearStartWorkData && secondMonthStartWorkData;
    const secondHasEndDate = secondYearEndWorkData && secondMonthEndWorkData;
    const secondIsMissingStartDate =
        !secondHasStartDate && secondIsCurrentlyWorkingData;
    const secondIsMissingEndDate =
        !secondHasEndDate && !secondIsCurrentlyWorkingData;
    const secondStartDateIsOmitted = secondHasEndDate && !secondHasStartDate;

    const secondHasNoWorkDatePeriod =
        addAnotherWorkPosition &&
        !isOnAdditionalWorkHistoryPath &&
        (secondIsMissingStartDate ||
            secondIsMissingEndDate ||
            secondStartDateIsOmitted);
    const secondHasDatesButNotCurrentlyWorking =
        !secondIsCurrentlyWorkingData && secondHasEndDate && secondHasStartDate;

    const defaultFirstName = 'Afonso';
    const defaultLastName = 'Santos';
    const defaultPhone = '(238) 513-57521';
    const defaultEmail = 'afonsofrancisco@yahoo.com';
    const defaultHeadingAddress = 'Rampa São Januário, Praia, Cabo Verde, 7600';
    const defaultJobTitle = 'Marketing Intern';
    const defaultWorkAddress = 'XYZ Company, City, State';
    const defaultBulletPointOne =
        'Assisted the marketing team in developing and implementing social media marketing campaigns, resulting in a 20% increase in website traffic.';
    const defaultBulletPointTwo =
        'Conducted market research and competitor analysis to identify new target demographics and improve marketing strategies.';
    const defaultBulletPointThree =
        'Created engaging content for social media platforms, increasing follower count by 15%.';
    const defaultBulletPointFour =
        'Assisted in organizing and executing marketing events, resulting in a 30% increase in lead generation.';
    const defaultSecondJobTitle = 'Sales Representative';
    const defaultSecondWorkAddress = 'ABC Retail Store, City, State';
    const defaultSecondBulletPointOne =
        'Provided exceptional customer service, resulting in a 15% increase in customer satisfaction ratings.';
    const defaultSecondBulletPointTwo =
        'Achieved and exceeded monthly sales targets by 20% through effective product knowledge and persuasive selling techniques.';
    const defaultSecondBulletPointThree =
        'Assisted in visual merchandising and store displays to enhance the customer shopping experience.';
    const defaultSecondBulletPointFour =
        'Assisted in visual merchandising and store displays to enhance the customer shopping experienceCollaborated with team members to resolve customer complaints and ensure smooth store operations.';

    const generateTitle = (path, titleData, titleInput, defaultTitle) => {
        // if form is submitted already, display jobTitleData
        return path ? titleData : titleInput || defaultTitle;
    };

    const generateAddress = (a, b, c, d, defaultValue) => {
        let address = '';

        if (a || b || c || d) {
            address += `${a || b || c || d}`;
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
        workHistoryFormOrderIsSubmitted,
        companyDataOrder,
        cityWorkDataOrder,
        stateWorkDataOrder,
        defaultWorkAddressOrder,
        companyInputOrder,
        cityWorkInputOrder,
        stateWorkInputOrder
    ) => {
        // display localStorage data if form is submitted already
        return workHistoryFormOrderIsSubmitted
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
        workHistoryFormOrderIsSubmitted,
        isCurrentlyWorkingDataOrder,
        yearStartWorkDataOrder,
        monthStartWorkDataOrder,
        yearEndWorkDataOrder,
        monthEndWorkDataOrder,
        isCurrentlyWorkingValueOrder,
        hasDatesButNotCurrentlyWorkingOrder,
        yearStartWorkInputOrder,
        monthStartWorkInputOrder,
        yearEndWorkInputOrder,
        monthEndWorkInputOrder
    ) => {
        let workDatePeriod = '';

        if (workHistoryFormOrderIsSubmitted) {
            if (isCurrentlyWorkingDataOrder) {
                workDatePeriod += `${yearStartWorkDataOrder}-${monthStartWorkDataOrder}-Current`;
            } else if (hasDatesButNotCurrentlyWorkingOrder) {
                workDatePeriod += `${yearStartWorkDataOrder}-${monthStartWorkDataOrder}-${yearEndWorkDataOrder}-${monthEndWorkDataOrder}`;
            }
        } else if (
            isCurrentlyWorkingValueOrder === true ||
            // if section is on work history and currently working is checked
            (isCurrentlyWorkingValueOrder === true &&
                !isCurrentlyWorkingValueOrder)
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

    const generateBulletPoint = (
        bulletPointInput,
        workResponsibilityFormOrderIsSubmitted,
        bulletPointData,
        defaultBulletPoint
    ) => {
        let bulletPoint = '';

        if (workResponsibilityFormOrderIsSubmitted) {
            bulletPoint = !bulletPointInput.trim() ? '' : bulletPointData;
        } else {
            bulletPoint = bulletPointInput || defaultBulletPoint;
        }

        return bulletPoint;
    };

    const manageBulletPointStyles = (
        bulletPoint,
        workResponsibilityFormOrderIsSubmitted
    ) => {
        let styles = '';

        // if bullet point is submitted empty
        if (
            generateBulletPoint(
                bulletPoint,
                workResponsibilityFormOrderIsSubmitted
            ) === ''
        ) {
            // add default styles
            styles = { workDescriptionList };
        } else {
            // add list-style-type: disc style
            styles = `${workDescriptionList} list-disc`;
        }

        return styles;
    };

    // BULLET POINT STYLING ERROR

    return (
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
            <div>
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
                    Email:
                    <span className={contactInput}>
                        <span>
                            {generateTitle(
                                !isOnHeadingPath,
                                emailData,
                                emailInput,
                                defaultEmail
                            )}
                        </span>
                    </span>
                </h6>
            </div>
            <div className={summaryContainer}>
                <h6 className={mainBackgroundHeading}>Summary</h6>
                <h6 className={summary}>
                    Results-driven professional with a passion for marketing
                    seeking a challenging position in a dynamic organization to
                    utilize my skills in digital marketing and brand management.
                </h6>
            </div>
            <div className={mainBackgroundContainer}>
                <h6 className={mainBackgroundHeading}>Skills</h6>
                <ul className={skillsList}>
                    <li>
                        Proficient in Google Analytics, SEO, and social media
                        marketing tools
                    </li>
                    <li>
                        Strong analytical skills and ability to interpret market
                        trends
                    </li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>Creative thinking and problem-solving abilities</li>
                    <li>Team player with strong interpersonal skills</li>
                </ul>
                <h6 className={mainBackgroundHeading}>Work History</h6>
                <div className={stayPeriodContainer}>
                    {hasNoWorkDatePeriod ? (
                        ''
                    ) : (
                        <div className={workDatePeriodContainer}>
                            <h6>
                                {generateWorkDatePeriod(
                                    workHistoryFormIsSubmitted,
                                    isCurrentlyWorkingData,
                                    yearStartWorkData,
                                    monthStartWorkData,
                                    yearEndWorkData,
                                    monthEndWorkData,
                                    isCurrentlyWorkingValue,
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
                                        bulletPointOneData,
                                        workResponsibilityFormIsSubmitted
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointOneInput,
                                        workResponsibilityFormIsSubmitted,
                                        bulletPointOneData,
                                        defaultBulletPointOne
                                    )}
                                </li>
                                <li
                                    className={manageBulletPointStyles(
                                        bulletPointTwoData,
                                        workResponsibilityFormIsSubmitted
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointTwoInput,
                                        workResponsibilityFormIsSubmitted,
                                        bulletPointTwoData,
                                        defaultBulletPointTwo
                                    )}
                                </li>
                                <li
                                    className={manageBulletPointStyles(
                                        bulletPointThreeData,
                                        workResponsibilityFormIsSubmitted
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointThreeInput,
                                        workResponsibilityFormIsSubmitted,
                                        bulletPointThreeData,
                                        defaultBulletPointThree
                                    )}
                                </li>
                                <li
                                    className={manageBulletPointStyles(
                                        bulletPointFourData,
                                        workResponsibilityFormIsSubmitted
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointFourInput,
                                        workResponsibilityFormIsSubmitted,
                                        bulletPointFourData,
                                        defaultBulletPointFour
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {addAnotherWorkPosition === true ? (
                    <div className={stayPeriodContainer}>
                        {secondHasNoWorkDatePeriod ? (
                            ''
                        ) : (
                            <div className={workDatePeriodContainer}>
                                <h6>
                                    {generateWorkDatePeriod(
                                        additionalWorkHistoryFormIsSubmitted,
                                        secondIsCurrentlyWorkingData,
                                        secondYearStartWorkData,
                                        secondMonthStartWorkData,
                                        secondYearEndWorkData,
                                        secondMonthEndWorkData,
                                        secondIsCurrentlyWorkingValue,
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
                                            secondBulletPointOneData
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondBulletPointOneInput,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondBulletPointOneData,
                                            defaultSecondBulletPointOne
                                        )}
                                    </li>
                                    <li
                                        className={manageBulletPointStyles(
                                            secondBulletPointTwoData
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondBulletPointTwoInput,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondBulletPointTwoData,
                                            defaultSecondBulletPointTwo
                                        )}
                                    </li>
                                    <li
                                        className={manageBulletPointStyles(
                                            secondBulletPointThreeData
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondBulletPointThreeInput,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondBulletPointThreeData,
                                            defaultSecondBulletPointThree
                                        )}
                                    </li>
                                    <li
                                        className={manageBulletPointStyles(
                                            secondBulletPointFourData
                                        )}
                                    >
                                        {generateBulletPoint(
                                            secondBulletPointFourInput,
                                            additionalWorkResponsibilityFormIsSubmitted,
                                            secondBulletPointFourData,
                                            defaultSecondBulletPointFour
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <h6 className={mainBackgroundHeading}>Education</h6>
                <div className={stayPeriodContainer}>
                    <div className={educationDatePeriodContainer}>
                        <h6>2022 - 06</h6>
                    </div>
                    <div className={stayDetailContainer}>
                        <h6 className={stayDetailHeading}>
                            Bachelor of Business Administration, Marketing
                        </h6>
                        <h6 className={institution}>
                            ABC University, City, State
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CVContent;
