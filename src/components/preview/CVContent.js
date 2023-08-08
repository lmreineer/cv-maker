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
    cityContactInput,
    stateContactInput,
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
    const isOnWorkResponsibilities = pathname === '/work-responsibilities';
    const isCurrentlyWorking = currentlyWorkingCheckboxValue === true;

    const hasNoAddress =
        !isOnHeadingPath &&
        (!cityContactInput ||
            !stateContactInput ||
            !countryInput ||
            !zipCodeInput);
    const defaultAddress = 'Rampa São Januário, Praia, Cabo Verde, 7600';
    const hasNoPhone = !isOnHeadingPath && !phoneInput;

    const hasStartDate = yearStartWorkInput && monthStartWorkInput;
    const hasEndDate = yearEndWorkInput && monthEndWorkInput;
    const isMissingStartDate = !hasStartDate && isCurrentlyWorking;
    const isMissingEndDate = !hasEndDate && !isCurrentlyWorking;
    const startDateIsOmitted = hasEndDate && !hasStartDate;

    const hasNoWorkDatePeriod =
        !isOnHeadingPath &&
        !isOnWorkHistoryPath &&
        (isMissingStartDate || isMissingEndDate || startDateIsOmitted);
    const hasDatesButNotCurrentlyWorking =
        !isCurrentlyWorking && hasEndDate && hasStartDate;

    const bulletPointIsSubmittedEmpty = (n) => {
        return (
            !n &&
            !isOnHeadingPath &&
            !isOnWorkHistoryPath &&
            !isOnWorkResponsibilities
        );
    };

    useEffect(() => {
        if (isOnHeadingPath)
            window.localStorage.setItem('test', firstNameInput);
    }, [isOnHeadingPath, firstNameInput]);

    return (
        <div className={textContainer}>
            <h1 className={fullName}>
                <span>
                    {window.localStorage.getItem('test') ||
                        firstNameInput ||
                        'Afonso '}
                </span>
                <span>{lastNameInput || 'Santos'}</span>
            </h1>
            <h6 className={profession}>{professionInput}</h6>
            <div>
                <h6 className={address}>
                    {hasNoAddress ? '' : 'Address:'}
                    {hasNoAddress ? (
                        ''
                    ) : (
                        <span className={contactInput}>
                            {cityContactInput ||
                                stateContactInput ||
                                countryInput ||
                                zipCodeInput ||
                                (defaultAddress && pathname === '/work-history'
                                    ? ''
                                    : defaultAddress)}

                            {cityContactInput &&
                                (stateContactInput ||
                                    countryInput ||
                                    zipCodeInput) &&
                                `, ${
                                    stateContactInput ||
                                    countryInput ||
                                    zipCodeInput
                                }`}

                            {stateContactInput &&
                                (countryInput || zipCodeInput) &&
                                `, ${countryInput || zipCodeInput}`}

                            {countryInput &&
                                zipCodeInput &&
                                `, ${zipCodeInput}`}
                        </span>
                    )}
                </h6>
                <h6 className={contactHeading}>
                    {hasNoPhone ? '' : 'Phone:'}
                    {hasNoPhone ? (
                        ''
                    ) : (
                        <span className={contactInput}>
                            {phoneInput || '(238) 513-57521'}
                        </span>
                    )}
                </h6>
                <h6 className={contactHeading}>
                    Email:
                    <span className={contactInput}>
                        <span>{emailInput || 'afonsofrancisco@yahoo.com'}</span>
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
                                {yearStartWorkInput || '2020'}-
                                {monthStartWorkInput || '04'}-
                                {isOnWorkResponsibilities &&
                                hasDatesButNotCurrentlyWorking
                                    ? `${yearEndWorkInput}-${monthEndWorkInput}`
                                    : isCurrentlyWorking
                                    ? 'Current'
                                    : // if section is work history and currently working is checked
                                    !isOnWorkResponsibilities &&
                                      isCurrentlyWorking
                                    ? 'Current'
                                    : // if not, display year and month inputs on work history section
                                      `${yearEndWorkInput || '2023'}-${
                                          monthEndWorkInput || '06'
                                      }`}
                            </h6>
                        </div>
                    )}
                    <div className={stayDetailContainer}>
                        <div className={stayDetailHeading}>
                            {jobTitleInput || 'Marketing Intern'}
                        </div>
                        <div>
                            <h6 className={institution}>
                                <span>
                                    {companyInput ||
                                        cityWorkInput ||
                                        stateWorkInput ||
                                        'XYZ Company, City, State'}

                                    {companyInput &&
                                        cityWorkInput &&
                                        `, ${cityWorkInput}`}

                                    {cityWorkInput &&
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
                                        : bulletPointOneInput ||
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
