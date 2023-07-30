import { useNavigate } from 'react-router-dom';

import Select from 'react-select';

const EducationForm = () => {
    const navigate = useNavigate();

    const navigateBack = () => navigate('/work-history');

    const options = [
        { value: 'Chocolate', label: 'Chocolate' },
        { value: 'Strawberry', label: 'Strawberry' },
        { value: 'Vanilla', label: 'Vanilla' },
    ];

    const customStyles = {
        control: (base) => ({
            ...base,
            border: '2px solid #E5E7EB',
            boxShadow: 'none',
            margin: '0.75rem',
            paddingLeft: '1rem',
            height: '3.75rem',
            borderRadius: '0.5rem',
            '&:hover': {
                border: '2px solid #7B8B5E',
            },
        }),
    };

    return (
        <>
            <form className="flex w-1/2 flex-col justify-center">
                <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                    Education:
                </h1>
                <div className="flex justify-center">
                    <input
                        type="text"
                        name="schoolName"
                        placeholder="School Name"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="schoolLocation"
                        placeholder="School Location"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        maxLength={40}
                    />
                </div>
                <div className="flex justify-center">
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="fieldOfStudy"
                        placeholder="Field of Study"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        maxLength={40}
                    />
                </div>
                <div className="flex justify-center">
                    <Select
                        name="graduationStart"
                        placeholder="Graduation Start Year"
                        options={options}
                        styles={customStyles}
                    />
                    <Select
                        name="graduation"
                        placeholder="Graduation Start Month"
                        options={options}
                        styles={customStyles}
                    />
                </div>

                <div className="flex justify-around">
                    <input
                        type="button"
                        className="my-10 w-56 rounded-lg bg-gray-300 p-5 transition hover:bg-gray-400"
                        onClick={navigateBack}
                        value="Back"
                    />
                    <input
                        type="submit"
                        id="continue-button"
                        className="my-10 w-56 rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                        value="Continue"
                    />
                </div>
            </form>
        </>
    );
};

export default EducationForm;
