import { useNavigate } from 'react-router-dom';

const WorkHistorySummary = ({ handleSubmit, setAddAnotherWorkPosition }) => {
    const getFormData = (formData) => {
        // make values of properties accessible
        const data = JSON.parse(window.localStorage.getItem(formData));
        // if form data is submitted, return form data
        return data ? data : '';
    };

    const {
        jobTitleData,
        companyData,
        bulletPointOneData,
        bulletPointTwoData,
        bulletPointThreeData,
        bulletPointFourData
    } = getFormData('workHistoryFormData');

    const manageBulletPointStyles = (bulletPoint) => {
        return bulletPoint ? 'my-3' : 'list-none';
    };

    const navigate = useNavigate();
    const navigateBack = () => navigate('/work-responsibility');

    const handleAddingWorkPosition = () => {
        setAddAnotherWorkPosition(true);
        navigate('/work-history');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-1/2 flex-col justify-center"
        >
            <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Work History Summary:
            </h1>
            <div className="flex flex-col justify-center">
                <div
                    className="m-3
                    rounded-lg border border-dark-yellow-green p-4
                    "
                >
                    <p className="font-medium">
                        {jobTitleData}, {companyData}
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
                    className="mx-3 flex items-center
                    justify-center rounded-lg border-2 border-dashed border-dark-yellow-green p-4"
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

export default WorkHistorySummary;
