import { useNavigate } from 'react-router-dom';

import Select from 'react-select';

const WorkHistoryForm = ({ handleSubmit, handleChange, setFieldValue }) => {
    // generate options for react-select inputs
    const generateOptions = (loop, n) => {
        const options = [];
        for (let i = 0; i <= loop; i += 1) {
            const year = n - i;
            options.push({ value: year.toString(), label: year.toString() });
        }

        // adjust numbering for month options
        options.forEach((month) => {
            if (month.value.length === 1) {
                month.value = `0${month.value}`;
                month.label = `0${month.label}`;
            }
        });

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
            '&:hover': {
                border: '2px solid #7B8B5E'
            }
        })
    };

    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/work-history-summary');
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex w-2/4 flex-col justify-center"
            >
                <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                    Education:
                </h1>
                <div className="flex">
                    <div className="w-full">
                        <div className="flex">
                            <input
                                type="text"
                                name="schoolName"
                                placeholder="School Name"
                                onChange={handleChange}
                                className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                                maxLength={40}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <input
                                type="text"
                                name="schoolLocation"
                                placeholder="School Location"
                                onChange={handleChange}
                                className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                                maxLength={40}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        onChange={handleChange}
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="fieldOfStudy"
                        placeholder="Field of Study"
                        onChange={handleChange}
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        maxLength={40}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="yearStartGraduation"
                        placeholder="Graduation Start Year"
                        options={generateOptions(70, 2023 + 10)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('yearStartGraduation', e.value)
                        }
                    />
                    <Select
                        name="monthStartGraduation"
                        placeholder="Graduation Start Month"
                        options={generateOptions(11, 12)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('monthStartGraduation', e.value)
                        }
                    />
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
        </>
    );
};

export default WorkHistoryForm;
