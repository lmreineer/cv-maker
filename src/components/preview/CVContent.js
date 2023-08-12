import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';

const CVContent = ({
    textContainer,
    fullName,
    firstNameInput,
    lastNameInput,
    profession,
    professionInput,
    address,
    contactInput,
    countryInput,
    cityHeadingInput,
    stateHeadingInput,
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
    workDescriptionList,
    bulletPointOneInput,
    bulletPointTwoInput,
    bulletPointThreeInput,
    bulletPointFourInput,
    educationDatePeriodContainer
}) => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';

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
                    currentlyWorkingCheckboxData: currentlyWorkingCheckboxValue,
                    bulletPointOneData: bulletPointOneInput,
                    bulletPointTwoData: bulletPointTwoInput,
                    bulletPointThreeData: bulletPointThreeInput,
                    bulletPointFourData: bulletPointFourInput
                })
            );
        }
    }, [
        isOnHeadingPath,
        firstNameInput,
        lastNameInput,
        professionInput,
        countryInput,
        cityHeadingInput,
        stateHeadingInput,
        zipCodeInput,
        phoneInput,
        emailInput,
        isOnWorkHistoryPath,
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
        bulletPointFourInput
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
        currentlyWorkingCheckboxData,
        bulletPointOneData,
        bulletPointTwoData,
        bulletPointThreeData,
        bulletPointFourData
    } = getFormData('workHistoryFormData');

    const hasNoAddress =
        !isOnHeadingPath &&
        !cityHeadingData &&
        !stateHeadingData &&
        !countryData &&
        !zipCodeData;

    const generateContact = () => {
        let contact = '';

        if (cityHeadingData || stateHeadingData || countryData || zipCodeData) {
            contact += `${
                cityHeadingData ||
                stateHeadingData ||
                countryData ||
                zipCodeData
            }`;
        } else {
            contact = 'Rampa São Januário, Praia, Cabo Verde, 7600';
        }

        if (cityHeadingData) {
            if (stateHeadingData || countryData || zipCodeData) {
                contact += `, ${
                    stateHeadingData || countryData || zipCodeData
                }`;
            }
        }

        if (stateHeadingData) {
            if (countryData || zipCodeInput) {
                contact += `, ${countryData || zipCodeData}`;
            }
        }

        if (countryData) {
            if (zipCodeData) {
                contact += `, ${zipCodeData}`;
            }
        }

        return contact;
    };

    const hasNoPhone = !isOnHeadingPath && !phoneData;

    const isCurrentlyWorking = currentlyWorkingCheckboxValue === true;
    const isOnWorkResponsibilities = pathname === '/work-responsibilities';

    const hasStartDate = yearEndWorkData && monthStartWorkData;
    const hasEndDate = yearEndWorkData && monthEndWorkData;
    const isMissingStartDate = !hasStartDate && isCurrentlyWorking;
    const isMissingEndDate = !hasEndDate && !isCurrentlyWorking;
    const startDateIsOmitted = hasEndDate && !hasStartDate;
    const hasNoWorkDatePeriod =
        !isOnHeadingPath &&
        !isOnWorkHistoryPath &&
        (isMissingStartDate || isMissingEndDate || startDateIsOmitted);
    const hasDatesButNotCurrentlyWorking =
        !isCurrentlyWorking && hasEndDate && hasStartDate;

    const generateWorkDatePeriod = () => {
        let workDatePeriod = '';

        if (!isOnWorkHistoryPath && hasDatesButNotCurrentlyWorking) {
            workDatePeriod += `${yearStartWorkData}-${monthStartWorkData}-${yearEndWorkData}-${monthEndWorkData}`;
        } else if (
            isCurrentlyWorking ||
            // if section is work history and currently working is checked
            (isCurrentlyWorking && !isOnWorkResponsibilities)
        ) {
            workDatePeriod += 'Current';
            // else, display year and month inputs on work history section
        } else {
            workDatePeriod += `${yearStartWorkInput || '2020'}-${
                monthStartWorkInput || '04'
            }-${yearEndWorkInput || '2023'}-${monthEndWorkInput || '06'}`;
        }

        return workDatePeriod;
    };

    const bulletPointIsSubmittedEmpty = (n) => {
        return (
            !n &&
            !isOnHeadingPath &&
            !isOnWorkHistoryPath &&
            !isOnWorkResponsibilities
        );
    };

    return (
        <div className={textContainer}>
            <h1 className={fullName}>
                <span>{firstNameData || 'Afonso'} </span>
                <span>{lastNameData || 'Santos'}</span>
            </h1>
            <h6 className={profession}>{professionData}</h6>
            <div>
                <h6 className={address}>
                    {hasNoAddress ? '' : 'Address:'}
                    {hasNoAddress ? (
                        ''
                    ) : (
                        <span className={contactInput}>
                            {generateContact()}
                        </span>
                    )}
                </h6>
                <h6 className={contactHeading}>
                    {hasNoPhone ? '' : 'Phone:'}
                    {hasNoPhone ? (
                        ''
                    ) : (
                        <span className={contactInput}>
                            {phoneData || '(238) 513-57521'}
                        </span>
                    )}
                </h6>
                <h6 className={contactHeading}>
                    Email:
                    <span className={contactInput}>
                        <span>{emailData || 'afonsofrancisco@yahoo.com'}</span>
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
                            <h6>{generateWorkDatePeriod()}</h6>
                        </div>
                    )}
                    <div className={stayDetailContainer}>
                        <div className={stayDetailHeading}>
                            {(!isOnWorkHistoryPath && jobTitleData) ||
                                jobTitleInput ||
                                'Marketing Intern'}
                        </div>
                        <div>
                            <h6 className={institution}>
                                <span>
                                    {!isOnWorkHistoryPath
                                        ? companyData ||
                                          cityWorkData ||
                                          stateWorkData
                                        : companyInput ||
                                          cityWorkInput ||
                                          stateWorkInput ||
                                          'XYZ Company, City, State'}

                                    {!isOnWorkHistoryPath
                                        ? companyData &&
                                          (cityWorkData || stateWorkData) &&
                                          `, ${cityWorkData || stateWorkData}`
                                        : companyInput &&
                                          (cityWorkInput || stateWorkInput) &&
                                          `, ${
                                              cityWorkInput || stateWorkInput
                                          }`}

                                    {!isOnWorkHistoryPath
                                        ? cityWorkData &&
                                          stateWorkData &&
                                          `, ${stateWorkData}`
                                        : cityWorkInput &&
                                          stateWorkInput &&
                                          `, ${stateWorkInput}`}
                                </span>
                            </h6>
                            <ul className={workDescriptionContainer}>
                                <li
                                    className={
                                        bulletPointIsSubmittedEmpty(
                                            bulletPointOneInput
                                        )
                                            ? // add default styles if bullet point is submitted empty
                                              { workDescriptionList }
                                            : // if not, add list-style-type: disc style
                                              `${workDescriptionList} list-disc`
                                    }
                                >
                                    {bulletPointIsSubmittedEmpty(
                                        bulletPointOneInput
                                    )
                                        ? ''
                                        : bulletPointOneData ||
                                          'Assisted the marketing team in developing and implementing social media marketing campaigns, resulting in a 20% increase in website traffic.'}
                                </li>
                                <li
                                    className={
                                        bulletPointIsSubmittedEmpty(
                                            bulletPointTwoInput
                                        )
                                            ? // add default styles if bullet point is submitted empty
                                              { workDescriptionList }
                                            : // if not, add list-style-type: disc style
                                              `${workDescriptionList} list-disc`
                                    }
                                >
                                    {bulletPointIsSubmittedEmpty(
                                        bulletPointTwoInput
                                    )
                                        ? ''
                                        : bulletPointTwoInput ||
                                          'Conducted market research and competitor analysis to identify new target demographics and improve marketing strategies.'}
                                </li>
                                <li
                                    className={
                                        bulletPointIsSubmittedEmpty(
                                            bulletPointThreeInput
                                        )
                                            ? // add default styles if bullet point is submitted empty
                                              { workDescriptionList }
                                            : // if not, add list-style-type: disc style
                                              `${workDescriptionList} list-disc`
                                    }
                                >
                                    {bulletPointIsSubmittedEmpty(
                                        bulletPointThreeInput
                                    )
                                        ? ''
                                        : bulletPointThreeInput ||
                                          'Created engaging content for social media platforms, increasing follower count by 15%.'}
                                </li>
                                <li
                                    className={
                                        bulletPointIsSubmittedEmpty(
                                            bulletPointFourInput
                                        )
                                            ? // add default styles if bullet point is submitted empty
                                              { workDescriptionList }
                                            : // if not, add list-style-type: disc style
                                              `${workDescriptionList} list-disc`
                                    }
                                >
                                    {bulletPointIsSubmittedEmpty(
                                        bulletPointFourInput
                                    )
                                        ? ''
                                        : bulletPointFourInput ||
                                          'Assisted in organizing and executing marketing events, resulting in a 30% increase in lead generation.'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className={stayPeriodContainer}>
                    <div className={workDatePeriodContainer}>
                        <h6>2020-07 - 2022</h6>
                    </div>
                    <div className={stayDetailContainer}>
                        <div className={stayDetailHeading}>Sales Representative</div>
                        <div>
                            <h6 className={institution}>ABC Retail Store, City, State</h6>
                            <ul className={workDescriptionContainer}>
                                <li className={workDescriptionList}>
                                    Provided exceptional customer service, resulting in a 15%
                                    increase in customer satisfaction ratings.
                                </li>
                                <li className={workDescriptionList}>
                                    Achieved and exceeded monthly sales targets by 20% through
                                    effective product knowledge and persuasive selling techniques.
                                </li>
                                <li className={workDescriptionList}>
                                    Assisted in visual merchandising and store displays to enhance
                                    the customer shopping experience.
                                </li>
                                <li className={workDescriptionList}>
                                    Collaborated with team members to resolve customer complaints
                                    and ensure smooth store operations.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
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
        </div>
    );
};

export default CVContent;
