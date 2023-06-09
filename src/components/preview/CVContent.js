const Content = ({
    textContainer,
    fullName,
    profession,
    address,
    contactHeading,
    contactInput,
    summary,
    skills,
    skillsList,
    workHistory,
}) => {
    return (
        <div className={textContainer}>
            <h1 className={fullName}>John Smith</h1>
            <h6 className={profession}>Profession</h6>
            <div className="leading-loose">
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
            <div className="mt-5">
                <h6 className={summary}>
                    Highly motivated Sales Associate with extensive customer service and
                    sales experience. Outgoing sales professional with track record of
                    driving increased sales, improving buying experience and elevating
                    company profile with target market.
                </h6>
            </div>
            <div className="mt-5">
                <h6 className={skills}>Skills</h6>
                <ul className={skillsList}>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
                <h6 className={workHistory}>Work History</h6>
                <div className="flex mt-3">
                    <div className="text-xs">
                        <h6>2023-02 - Current</h6>
                    </div>
                    <div className="ml-20 text-xs">
                        <div>
                            Manager
                        </div>
                        <div>
                            <h6 className="mt-1 italic font-light">Company</h6>
                            <ul className="list-disc ml-5 mt-2">
                                <li className="font-light">A</li>
                                <li className="font-light">B</li>
                                <li className="font-light">C</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex mt-3">
                    <div className="text-xs w-24">
                        <h6>2009-04 - 2022</h6>
                    </div>
                    <div className="ml-20 text-xs">
                        <div>
                            Associate Manager
                        </div>
                        <div>
                            <h6 className="mt-1 italic font-light">Company</h6>
                            <ul className="list-disc ml-5 mt-2">
                                <li className="font-light">A</li>
                                <li className="font-light">B</li>
                                <li className="font-light">C</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6 className="mt-5 font-bold italic border-b-2">Education</h6>
                <div className="flex mt-3">
                    <div className="text-xs">
                        <h6>2023 - 2024</h6>
                    </div>
                    <div className="ml-20 text-xs">
                        <h6>Degree</h6>
                        <h6 className="mt-1 font-light">School</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
