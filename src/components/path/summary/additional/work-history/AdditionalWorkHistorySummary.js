import { useNavigate } from 'react-router-dom';

const AdditionalWorkHistorySummary = ({ handleSubmit }) => {
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

    const {
        bulletPointOneData,
        bulletPointTwoData,
        bulletPointThreeData,
        bulletPointFourData
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

    const secondHasStartDate =
        secondYearStartWorkData && secondMonthStartWorkData;
    const secondHasEndDate = secondYearEndWorkData && secondMonthEndWorkData;
    const secondHasDatesButNotCurrentlyWorking =
        !secondCurrentlyWorkingCheckboxData &&
        secondHasEndDate &&
        secondHasStartDate;

    const generateWorkDatePeriod = (
        currentlyWorkingCheckboxDataOrder,
        yearStartWorkDataOrder,
        monthStartWorkDataOrder,
        hasDatesButNotCurrentlyWorkingOrder,
        yearEndWorkDataOrder,
        monthEndWorkDataOrder
    ) => {
        let workDatePeriod = '';

        if (currentlyWorkingCheckboxDataOrder) {
            workDatePeriod += `${yearStartWorkDataOrder}-${monthStartWorkDataOrder}-Current`;
        } else {
            if (hasDatesButNotCurrentlyWorkingOrder) {
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
        secondBulletPointOneData,
        secondBulletPointTwoData,
        secondBulletPointThreeData,
        secondBulletPointFourData
    } = getFormData('additionalWorkResponsibilityFormData');

    const manageBulletPointStyles = (bulletPoint) => {
        return bulletPoint ? 'my-3' : 'list-none';
    };

    const navigate = useNavigate();
    const navigateBack = () => navigate('/additional-work-history');

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-[616px] flex-col justify-center"
        >
            <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Work History:
            </h1>
            <div className="flex flex-col">
                <div className="break-all rounded-t-lg border border-dark-yellow-green p-4">
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
                            hasDatesButNotCurrentlyWorking,
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
                <div className="break-all rounded-b-lg border border-t-0 border-dark-yellow-green p-4">
                    <p className="font-medium">
                        {secondJobTitleData && secondCompanyData
                            ? `${secondJobTitleData}, ${secondCompanyData}`
                            : ''}
                        <span className="font-normal">
                            {generateAddress(
                                secondCityWorkData,
                                secondStateWorkData
                            )}
                        </span>
                    </p>
                    <p className="font-medium">
                        {generateWorkDatePeriod(
                            secondCurrentlyWorkingCheckboxData,
                            secondYearStartWorkData,
                            secondMonthStartWorkData,
                            secondHasDatesButNotCurrentlyWorking,
                            secondYearEndWorkData,
                            monthEndWorkData
                        )}
                    </p>
                    <li
                        className={manageBulletPointStyles(
                            secondBulletPointOneData
                        )}
                    >
                        {secondBulletPointOneData}
                    </li>
                    <li
                        className={manageBulletPointStyles(
                            secondBulletPointTwoData
                        )}
                    >
                        {secondBulletPointTwoData}
                    </li>
                    <li
                        className={manageBulletPointStyles(
                            secondBulletPointThreeData
                        )}
                    >
                        {secondBulletPointThreeData}
                    </li>
                    <li
                        className={manageBulletPointStyles(
                            secondBulletPointFourData
                        )}
                    >
                        {secondBulletPointFourData}
                    </li>
                </div>
            </div>
            <div className="flex justify-around">
                <input
                    type="button"
                    className="my-10 w-56 rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                    onClick={navigateBack}
                    value="Back"
                />
                <input
                    type="submit"
                    className="my-10 w-56 rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                    value="Continue"
                />
            </div>
        </form>
    );
};

export default AdditionalWorkHistorySummary;
