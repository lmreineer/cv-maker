import { useNavigate } from 'react-router-dom';

const WorkHistorySummary = ({ handleSubmit }) => {
    const getFormData = (formData) => {
        // make values of properties accessible
        const data = JSON.parse(window.localStorage.getItem(formData));
        // if form data is submitted, return form data
        return data ? data : '';
    };

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

    const generateAddress = (a, b) => {
        let address = '';

        if (a || b) {
            address += ` | ${a || b}`;
        }

        if (a) {
            if (b) {
                address += `, ${b}`;
            }
        }

        return address;
    };

    const hasStartDate = yearStartWorkData && monthStartWorkData;
    const hasEndDate = yearEndWorkData && monthEndWorkData;
    const hasDatesButNotCurrentlyWorking =
        !currentlyWorkingCheckboxData && hasEndDate && hasStartDate;

    const generateWorkDatePeriod = (
        currentlyWorkingCheckboxDataOrder,
        yearStartWorkDataOrder,
        monthStartWorkDataOrder,
        yearEndWorkDataOrder,
        monthEndWorkDataOrder
    ) => {
        let workDatePeriod = '';

        if (currentlyWorkingCheckboxDataOrder) {
            if (yearStartWorkData && monthStartWorkData) {
                workDatePeriod += `${yearStartWorkDataOrder}-${monthStartWorkDataOrder}-Current`;
            }
        } else {
            if (hasDatesButNotCurrentlyWorking) {
                workDatePeriod += `${yearStartWorkDataOrder || ''}-${
                    monthStartWorkDataOrder || ''
                } - ${yearEndWorkDataOrder || ''}-${
                    monthEndWorkDataOrder || ''
                }`;
            }
        }

        return workDatePeriod;
    };

    const {
        bulletPointOneData,
        bulletPointTwoData,
        bulletPointThreeData,
        bulletPointFourData
    } = getFormData('workResponsibilityFormData');

    const manageBulletPointStyles = (bulletPoint) => {
        return bulletPoint ? 'my-3' : 'list-none';
    };

    const navigate = useNavigate();
    const navigateBack = () => navigate('/work-responsibility');

    const handleAddingWorkPosition = () => {
        navigate('/additional-work-history');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center md:w-[36rem]"
        >
            <h1 className="m-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Work history summary:
            </h1>
            <div className="flex flex-col">
                <div className="m-3 break-all rounded-lg border border-dark-yellow-green p-4">
                    <p className="font-medium">
                        {jobTitleData && companyData
                            ? `${jobTitleData}, ${companyData}`
                            : ''}
                        <span className="font-normal">
                            {generateAddress(cityWorkData, stateWorkData)}
                        </span>
                    </p>
                    <p className="font-medium">
                        {generateWorkDatePeriod(
                            currentlyWorkingCheckboxData,
                            yearStartWorkData,
                            monthStartWorkData,
                            yearEndWorkData,
                            monthEndWorkData
                        )}
                    </p>
                    <li className={manageBulletPointStyles(bulletPointOneData)}>
                        {bulletPointOneData}
                    </li>
                    <li className={manageBulletPointStyles(bulletPointTwoData)}>
                        {bulletPointTwoData}
                    </li>
                    <li
                        className={manageBulletPointStyles(
                            bulletPointThreeData
                        )}
                    >
                        {bulletPointThreeData}
                    </li>
                    <li
                        className={manageBulletPointStyles(bulletPointFourData)}
                    >
                        {bulletPointFourData}
                    </li>
                </div>
                <button
                    className="mx-3 flex items-center justify-center rounded-lg border-2 border-dashed border-dark-yellow-green p-4"
                    onClick={handleAddingWorkPosition}
                >
                    <span className="material-symbols-outlined mr-2 text-xl font-semibold">
                        add
                    </span>
                    Add another position
                </button>
            </div>
            <div className="flex justify-around">
                <input
                    type="button"
                    className="m-3 my-10 w-full rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                    onClick={navigateBack}
                    value="Back"
                />
                <input
                    type="submit"
                    className="m-3 my-10 w-full rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                    value="Continue"
                />
            </div>
        </form>
    );
};

export default WorkHistorySummary;
