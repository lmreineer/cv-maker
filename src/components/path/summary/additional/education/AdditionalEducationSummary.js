import { useNavigate } from 'react-router-dom';

const AdditionalEducationSummary = ({ handleSubmit }) => {
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

    const {
        secondYearStartGraduationData,
        secondMonthStartGraduationData,
        secondSchoolNameData,
        secondSchoolLocationData,
        secondDegreeData,
        secondFieldOfStudyData
    } = getFormData('additionalEducationFormData');

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
    const navigateBack = () => navigate('/additional-education');
    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
            <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Education:
            </h1>
            <div className="flex w-[616px] flex-col">
                <div className="break-all rounded-t-lg border border-dark-yellow-green p-4">
                    <p className="font-medium">{schoolNameData}</p>
                    <p>{schoolLocationData}</p>
                    <p>
                        {generateAddress(degreeData, fieldOfStudyData)}
                        {monthStartGraduationData &&
                            yearStartGraduationData &&
                            ` (${monthStartGraduationData} ${yearStartGraduationData})`}
                    </p>
                </div>
                <div className="break-all rounded-b-lg border border-t-0 border-dark-yellow-green p-4">
                    <p className="font-medium">{secondSchoolNameData}</p>
                    <p>{secondSchoolLocationData}</p>
                    <p>
                        {generateAddress(
                            secondDegreeData,
                            secondFieldOfStudyData
                        )}
                        {secondMonthStartGraduationData &&
                            secondYearStartGraduationData &&
                            ` (${secondMonthStartGraduationData} ${secondYearStartGraduationData})`}
                    </p>
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

export default AdditionalEducationSummary;
