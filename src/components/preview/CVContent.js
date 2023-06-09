const Content = ({
    modalContainer,
    fullName,
    profession,
    address,
    previewContactHeading,
    previewContactInput,
    previewSummary,
}) => {
    return (
        <div className={modalContainer}>
            <h1 className={fullName}>John Smith</h1>
            <h6 className={profession}>Profession</h6>
            <div className="leading-loose">
                <h6 className={address}>Address: <span className={previewContactInput}>Rampa São Januário, Praia, Cabo Verde</span></h6>
                <h6 className={previewContactHeading}>Phone: <span className={previewContactInput}>(238) 513-57521</span></h6>
                <h6 className={previewContactHeading}>Email: <span className={previewContactInput}>afonsofrancisco@yahoo.com</span></h6>
            </div>
            <div className="mt-5">
                <h6 className={previewSummary}>Highly motivated Sales Associate with extensive customer service and sales experience. Outgoing sales professional with track record of driving increased sales, improving buying experience and elevating company profile with target market.</h6>
            </div>
        </div>
    );
};

export default Content;
