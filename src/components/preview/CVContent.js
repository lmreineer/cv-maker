const Content = ({
    textContainer,
    fullName,
    profession,
    address,
    contactHeading,
    contactInput,
    summaryContainer,
    summaryHeading,
    summary,
    mainBackgroundContainer,
    mainBackgroundHeading,
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
    return (
        <div className={textContainer}>
            <h1 className={fullName}>John Smith</h1>
            <h6 className={profession}>Profession</h6>
            <div>
                <h6 className={address}>
                    Address:{" "}
                    <span className={contactInput}>
                        Rampa São Januário, Praia, Cabo Verde
                    </span>
                </h6>
                <h6 className={contactHeading}>
                    Phone: <span className={contactInput}>(238) 513-57521</span>
                </h6>
                <h6 className={contactHeading}>
                    Email: <span className={contactInput}>afonsofrancisco@yahoo.com</span>
                </h6>
            </div>
            <div className={summaryContainer}>
                <h6 className={summaryHeading}>Summary</h6>
                <h6 className={summary}>
                    Highly motivated Sales Associate with extensive customer service and
                    sales experience. Outgoing sales professional with track record of
                    driving increased sales, improving buying experience and elevating
                    institution profile with target market.
                </h6>
            </div>
            <div className={mainBackgroundContainer}>
                <h6 className={mainBackgroundHeading}>Skills</h6>
                <ul className={skillsList}>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
                <h6 className={mainBackgroundHeading}>Work History</h6>
                <div className={stayPeriodContainer}>
                    <div className={workTimePeriodContainer}>
                        <h6>2023-02 - Current</h6>
                    </div>
                    <div className={stayDetailContainer}>
                        <div className={stayDetailHeading}>Manager</div>
                        <div>
                            <h6 className={institution}>Company</h6>
                            <ul className={workDescriptionContainer}>
                                <li className={workDescriptionList}>A</li>
                                <li className={workDescriptionList}>B</li>
                                <li className={workDescriptionList}>C</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={stayPeriodContainer}>
                    <div className={workTimePeriodContainer}>
                        <h6>2009-04 - 2022</h6>
                    </div>
                    <div className={stayDetailContainer}>
                        <div className={stayDetailHeading}>Associate Manager</div>
                        <div>
                            <h6 className={institution}>Company</h6>
                            <ul className={workDescriptionContainer}>
                                <li className={workDescriptionList}>A</li>
                                <li className={workDescriptionList}>B</li>
                                <li className={workDescriptionList}>C</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className={mainBackgroundHeading}>Education</h6>
                <div className={stayPeriodContainer}>
                    <div className={educationTimePeriodContainer}>
                        <h6>2023 - 2024</h6>
                    </div>
                    <div className={stayDetailContainer}>
                        <h6 className={stayDetailHeading}>Degree</h6>
                        <h6 className={institution}>School</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
