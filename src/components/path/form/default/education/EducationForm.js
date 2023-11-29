import { useNavigate } from 'react-router-dom';

import Select from 'react-select';

const EducationForm = ({
    setSkipEducation,
    handleSubmit,
    handleChange,
    setFieldValue
}) => {
    const handleSkipEducation = (str) => {
        str.trim().length !== 0
            ? setSkipEducation(false)
            : setSkipEducation(true);
    };

    // generate options for react-select inputs
    const generateYearStartOptions = () => {
        const options = [];
        for (let i = 0; i <= 70; i += 1) {
            const year = 2033 - i;
            options.push({ value: year.toString(), label: year.toString() });
        }

        return options;
    };

    const generateMonthStartOptions = () => {
        const options = [];
        options.push(
            { value: 'December', label: 'December' },
            { value: 'November', label: 'November' },
            { value: 'October', label: 'October' },
            { value: 'September', label: 'September' },
            { value: 'August', label: 'August' },
            { value: 'July', label: 'July' },
            { value: 'June', label: 'June' },
            { value: 'May', label: 'May' },
            { value: 'April', label: 'April' },
            { value: 'March', label: 'March' },
            { value: 'February', label: 'February' },
            { value: 'January', label: 'January' }
        );

        return options;
    };

    // adjust styles of react-select inputs
    const customStyles = {
        control: (base) => ({
            ...base,
            border: '2px solid #E5E7EB',
            boxShadow: 'none',
            margin: '0.75rem',
            paddingLeft: '1rem',
            height: '3.75rem',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            wordBreak: 'break-all',
            '&:hover': {
                border: '2px solid #7B8B5E'
            }
        })
    };

    const maximizeTextLength = (inputValue) => {
        const maxLength = 4;
        return inputValue.length <= maxLength
            ? inputValue
            : inputValue.substr(0, maxLength);
    };

    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/work-history');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Your most recent education
            </h1>
            <div className="flex">
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    onChange={(e) => {
                        handleChange(e);
                        handleSkipEducation(e.target.value);
                    }}
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    maxLength={40}
                />
                <input
                    type="text"
                    name="fieldOfStudy"
                    placeholder="Field of Study"
                    onChange={(e) => {
                        handleChange(e);
                        handleSkipEducation(e.target.value);
                    }}
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    maxLength={40}
                />
            </div>
            <div className="flex">
                <input
                    type="text"
                    name="schoolName"
                    placeholder="School Name"
                    onChange={(e) => {
                        handleChange(e);
                        handleSkipEducation(e.target.value);
                    }}
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    maxLength={40}
                />
                <input
                    type="text"
                    name="schoolLocation"
                    placeholder="School Location"
                    onChange={(e) => {
                        handleChange(e);
                        handleSkipEducation(e.target.value);
                    }}
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    maxLength={40}
                />
            </div>
            <div className="flex">
                <Select
                    name="yearStartGraduation"
                    placeholder="Graduation Start Year"
                    options={generateYearStartOptions()}
                    styles={customStyles}
                    onChange={(e) => {
                        setFieldValue('yearStartGraduation', e.value);
                        handleSkipEducation(e.value);
                    }}
                    onInputChange={maximizeTextLength}
                />
                <Select
                    name="monthStartGraduation"
                    placeholder="Graduation Start Month"
                    options={generateMonthStartOptions()}
                    styles={customStyles}
                    onChange={(e) => {
                        setFieldValue('monthStartGraduation', e.value);
                        handleSkipEducation(e.value);
                    }}
                    onInputChange={maximizeTextLength}
                />
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

export default EducationForm;
