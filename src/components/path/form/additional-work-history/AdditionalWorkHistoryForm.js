import { useNavigate } from 'react-router-dom';

import Select from 'react-select';

const AdditionalWorkHistoryForm = ({
    secondCurrentlyWorkingCheckboxValue,
    setSecondCurrentlyWorkingCheckboxValue,
    handleSubmit,
    handleChange,
    formikErrors,
    touched,
    setFieldValue
}) => {
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

    const handleCheckedState = () => {
        secondCurrentlyWorkingCheckboxValue === true
            ? setSecondCurrentlyWorkingCheckboxValue(false)
            : setSecondCurrentlyWorkingCheckboxValue(true);
    };

    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/');
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex w-2/4 flex-col justify-center"
            >
                <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                    Work History:
                </h1>
                <div className="flex">
                    <div className="w-full">
                        <div className="flex">
                            <input
                                type="text"
                                name="jobTitleTwo"
                                placeholder="Job Title"
                                onChange={handleChange}
                                className={
                                    formikErrors.jobTitle && touched.jobTitle
                                        ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                        : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                                }
                                maxLength={40}
                            />
                        </div>
                        {formikErrors.jobTitle && touched.jobTitle && (
                            <p className="ml-4 text-red-800">
                                {formikErrors.jobTitle}
                            </p>
                        )}
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <input
                                type="text"
                                name="companyTwo"
                                placeholder="Company"
                                onChange={handleChange}
                                className={
                                    formikErrors.company && touched.company
                                        ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                        : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                                }
                                maxLength={40}
                            />
                        </div>
                        {formikErrors.company && touched.company && (
                            <p className="ml-4 text-red-800">
                                {formikErrors.company}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        name="cityWorkTwo"
                        placeholder="City"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="stateWorkTwo"
                        placeholder="State / Country"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        maxLength={40}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="yearStartWorkTwo"
                        placeholder="Year Start"
                        options={generateOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('yearStartWorkTwo', e.value)
                        }
                    />
                    <Select
                        name="monthStartWorkTwo"
                        placeholder="Month Start"
                        options={generateOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('monthStartWorkTwo', e.value)
                        }
                    />
                </div>
                <div className="flex">
                    <Select
                        name="yearEndWorkTwo"
                        placeholder="Year End"
                        options={generateOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('yearEndWorkTwo', e.value)
                        }
                        isDisabled={secondCurrentlyWorkingCheckboxValue}
                    />
                    <Select
                        name="monthEndWorkTwo"
                        placeholder="Month End"
                        options={generateOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('monthEndWorkTwo', e.value)
                        }
                        isDisabled={secondCurrentlyWorkingCheckboxValue}
                    />
                </div>
                <div className="flex">
                    <label className="m-4 flex select-none text-base hover:cursor-pointer">
                        <input
                            type="checkbox"
                            name="secondCurrentlyWorkingCheckbox"
                            className="mr-3 w-4 hover:cursor-pointer"
                            checked={secondCurrentlyWorkingCheckboxValue}
                            onChange={handleCheckedState}
                        />
                        I currently work here
                    </label>
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

export default AdditionalWorkHistoryForm;
