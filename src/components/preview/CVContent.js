import { useLocation } from "react-router-dom";

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
    cityInput,
    stateProvinceInput,
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
    workTimePeriodContainer,
    stayDetailContainer,
    stayDetailHeading,
    institution,
    workDescriptionContainer,
    workDescriptionList,
    educationTimePeriodContainer,
}) => {
    const pathname = useLocation().pathname;

    let defaultAddress = "Rampa São Januário, Praia, Cabo Verde, 7600";

    return (
        <div className={textContainer}>
            <h1 className={fullName}>
                <span>{firstNameInput || "Afonso"} </span>
                <span>{lastNameInput || "Santos"}</span>
            </h1>
            <h6 className={profession}>{professionInput}</h6>
            <div>
                <h6 className={address}>
                    {pathname === "/skills" && <span>Address:</span> ? (
                        ""
                    ) : (
                        <span>Address:</span>
                    )}
                    {cityInput ||
                        stateProvinceInput ||
                        countryInput ||
                        zipCodeInput ||
                        (pathname === "/skills" && <span>{defaultAddress}</span> ? (
                            ""
                        ) : (
                            <span className={contactInput}>{defaultAddress}</span>
                        ))}

                    {cityInput &&
                        (stateProvinceInput || countryInput || zipCodeInput) &&
                        `, ${stateProvinceInput || countryInput || zipCodeInput}`}

                    {stateProvinceInput &&
                        (countryInput || zipCodeInput) &&
                        `, ${countryInput || zipCodeInput}`}

                    {countryInput && zipCodeInput && `, ${zipCodeInput}`}
                </h6>
                <h6 className={contactHeading}>
                    Phone:
                    <span className={contactInput}>
                        {phoneInput || "(238) 513-57521"}
                    </span>
                </h6>
                <h6 className={contactHeading}>
                    Email:
                    <span className={contactInput}>
                        <span>{emailInput || "afonsofrancisco@yahoo.com"}</span>
                    </span>
                </h6>
            </div>
            <div className={summaryContainer}>
                <h6 className={mainBackgroundHeading}>Summary</h6>
                <h6 className={summary}>
                    Results-driven professional with a passion for marketing seeking a
                    challenging position in a dynamic organization to utilize my skills in
                    digital marketing and brand management.
                </h6>
            </div>
            <div className={mainBackgroundContainer}>
                <h6 className={mainBackgroundHeading}>Skills</h6>
                <ul className={skillsList}>
                    <li>
                        Proficient in Google Analytics, SEO, and social media marketing
                        tools
                    </li>
                    <li>
                        Strong analytical skills and ability to interpret market trends
                    </li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>Creative thinking and problem-solving abilities</li>
                    <li>Team player with strong interpersonal skills</li>
                </ul>
                <h6 className={mainBackgroundHeading}>Work History</h6>
                <div className={stayPeriodContainer}>
                    <div className={workTimePeriodContainer}>
                        <h6>2023-04 - Current</h6>
                    </div>
                    <div className={stayDetailContainer}>
                        <div className={stayDetailHeading}>Marketing Intern</div>
                        <div>
                            <h6 className={institution}>XYZ Company, City, State</h6>
                            <ul className={workDescriptionContainer}>
                                <li className={workDescriptionList}>
                                    Assisted the marketing team in developing and implementing
                                    social media marketing campaigns, resulting in a 20% increase
                                    in website traffic.
                                </li>
                                <li className={workDescriptionList}>
                                    Conducted market research and competitor analysis to identify
                                    new target demographics and improve marketing strategies.
                                </li>
                                <li className={workDescriptionList}>
                                    Created engaging content for social media platforms,
                                    increasing follower count by 15%.
                                </li>
                                <li className={workDescriptionList}>
                                    Assisted in organizing and executing marketing events,
                                    resulting in a 30% increase in lead generation.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={stayPeriodContainer}>
                    <div className={workTimePeriodContainer}>
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
                </div>
                <h6 className={mainBackgroundHeading}>Education</h6>
                <div className={stayPeriodContainer}>
                    <div className={educationTimePeriodContainer}>
                        <h6>2022 - 06</h6>
                    </div>
                    <div className={stayDetailContainer}>
                        <h6 className={stayDetailHeading}>
                            Bachelor of Business Administration, Marketing
                        </h6>
                        <h6 className={institution}>ABC University, City, State</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVContent;
