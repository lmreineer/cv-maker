import { useNavigate } from 'react-router-dom';

const EducationSummary = ({ handleSubmit }) => {
    const getFormData = (formData) => {
        // make values of properties accessible
        const data = JSON.parse(window.localStorage.getItem(formData));
        // if form data is submitted, return form data
        return data ? data : '';
    };

    const {
        yearStartGraduationData,
        monthStartGraduationData,
        schoolNameData,
        schoolLocationData,
        degreeData,
        fieldOfStudyData
    } = getFormData('educationFormData');

    const generateAddress = (a, b) => {
        let address = '';

        if (a || b) {
            address += `${a || b}`;
        }

        if (a) {
            if (b) {
                address += `, ${b}`;
            }
        }

        return address;
    };

    const navigate = useNavigate();
    const navigateBack = () => navigate('/education');

    const handleAddingEducation = () => {
        navigate('/additional-education');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Education summary:
            </h1>
            <div className="flex flex-col">
                <div className="m-3 break-all rounded-lg border border-dark-yellow-green p-4">
                    <p className="font-medium">{schoolNameData}</p>
                    <p>{schoolLocationData}</p>
                    <p>
                        {generateAddress(degreeData, fieldOfStudyData)}
                        {monthStartGraduationData &&
                            yearStartGraduationData &&
                            ` (${monthStartGraduationData} ${yearStartGraduationData})`}
                    </p>
                </div>
                <button
                    className="mx-3 flex items-center justify-center rounded-lg border-2 border-dashed border-dark-yellow-green p-4"
                    onClick={handleAddingEducation}
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

export default EducationSummary;
