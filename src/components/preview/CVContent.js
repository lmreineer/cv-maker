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
    const isOnWorkResponbility = pathname === '/work-responsibility';
    const workHistoryFormIsSubmitted = !isOnHeadingPath && !isOnWorkHistoryPath;
    const workResponsibilityFormIsSubmitted =
        workHistoryFormIsSubmitted && !isOnWorkResponbility;

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
        } else if (isOnWorkHistoryPath || isOnWorkResponbility) {
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
        isOnWorkResponbility,
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

    const isCurrentlyWorkingData = currentlyWorkingCheckboxData === true;
    const isCurrentlyWorkingValue = currentlyWorkingCheckboxValue === true;

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

    const defaultHeadingAddress = 'Rampa São Januário, Praia, Cabo Verde, 7600';
    const defaultWorkAddress = 'XYZ Company, City, State';
    const defaultBulletPointOne =
        'Assisted the marketing team in developing and implementing social media marketing campaigns, resulting in a 20% increase in website traffic.';
    const defaultBulletPointTwo =
        'Conducted market research and competitor analysis to identify new target demographics and improve marketing strategies.';
    const defaultBulletPointThree =
        'Created engaging content for social media platforms, increasing follower count by 15%.';
    const defaultBulletPointFour =
        'Assisted in organizing and executing marketing events, resulting in a 30% increase in lead generation.';

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

    const generateWorkDatePeriod = () => {
        let workDatePeriod = '';

        if (workHistoryFormIsSubmitted) {
            if (isCurrentlyWorkingData) {
                workDatePeriod += `${yearStartWorkData}-${monthStartWorkData}-Current`;
            } else if (hasDatesButNotCurrentlyWorking) {
                workDatePeriod += `${yearStartWorkData}-${monthStartWorkData}-${yearEndWorkData}-${monthEndWorkData}`;
            }
        } else if (
            isCurrentlyWorkingValue === true ||
            // if section is on work history and currently working is checked
            (isCurrentlyWorkingValue === true && !isOnWorkResponbility)
        ) {
            workDatePeriod += `${yearStartWorkInput || '2020'}-${
                monthStartWorkInput || '04'
            }-Current`;
            // else, display year and month inputs on work history section
        } else {
            workDatePeriod += `${yearStartWorkInput || '2020'}-${
                monthStartWorkInput || '04'
            }-${yearEndWorkInput || '2023'}-${monthEndWorkInput || '06'}`;
        }

        return workDatePeriod;
    };

    const generateJobTitle = () => {
        // if form is submitted already, display jobTitleData
        return workHistoryFormIsSubmitted
            ? jobTitleData
            : jobTitleInput || 'Marketing Intern';
    };

    const generateBulletPoint = (
        bulletPointInput,
        bulletPointData,
        defaultBulletPoint
    ) => {
        let bulletPoint = '';

        if (workResponsibilityFormIsSubmitted) {
            bulletPoint = !bulletPointInput.trim() ? '' : bulletPointData;
        } else {
            bulletPoint = bulletPointInput || defaultBulletPoint;
        }

        return bulletPoint;
    };

    const manageBulletPointStyles = (bulletPoint) => {
        let styles = '';

        // if bullet point is submitted empty
        if (
            workHistoryFormIsSubmitted &&
            !isOnWorkResponbility &&
            generateBulletPoint(bulletPoint) === ''
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
                            {generateJobTitle()}
                        </div>
                        <div>
                            <h6 className={institution}>
                                <span>
                                    {
                                        // display localStorage data if form is submitted already
                                        !isOnWorkHistoryPath
                                            ? generateAddress(
                                                  companyData,
                                                  cityWorkData,
                                                  stateWorkData,
                                                  null,
                                                  defaultWorkAddress
                                              )
                                            : generateAddress(
                                                  companyInput,
                                                  cityWorkInput,
                                                  stateWorkInput,
                                                  null,
                                                  defaultWorkAddress
                                              )
                                    }
                                </span>
                            </h6>
                            <ul className={workDescriptionContainer}>
                                <li
                                    className={manageBulletPointStyles(
                                        bulletPointOneInput
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointOneInput,
                                        bulletPointOneData,
                                        defaultBulletPointOne
                                    )}
                                </li>
                                <li
                                    className={manageBulletPointStyles(
                                        bulletPointTwoInput
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointTwoInput,
                                        bulletPointTwoData,
                                        defaultBulletPointTwo
                                    )}
                                </li>
                                <li
                                    className={manageBulletPointStyles(
                                        bulletPointThreeInput
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointThreeInput,
                                        bulletPointThreeData,
                                        defaultBulletPointThree
                                    )}
                                </li>
                                <li
                                    className={manageBulletPointStyles(
                                        bulletPointFourInput
                                    )}
                                >
                                    {generateBulletPoint(
                                        bulletPointFourInput,
                                        bulletPointFourData,
                                        defaultBulletPointFour
                                    )}
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
