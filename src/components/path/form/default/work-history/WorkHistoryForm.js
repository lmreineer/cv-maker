import { useNavigate } from 'react-router-dom';

import Select from 'react-select';

const WorkHistoryForm = ({
    setShowSkipWorkHistoryModal,
    showSkipWorkHistoryModal,
    currentlyWorkingCheckboxValue,
    setCurrentlyWorkingCheckboxValue,
    handleSubmit,
    handleChange,
    jobTitleValues,
    formikErrors,
    touched,
    companyValues,
    setFieldValue
}) => {
    const handleSkipWorkHistoryModal = (e) => {
        e !== ''
            ? setShowSkipWorkHistoryModal(false)
            : setShowSkipWorkHistoryModal(true);
    };

    // check if main input is omitted after inputting other secondary inputs
    const inputIsOmitted = (omittedInput) => {
        // main input is omitted but secondary inputs are inputted
        return omittedInput === '' && !showSkipWorkHistoryModal;
    };

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
        currentlyWorkingCheckboxValue
            ? setCurrentlyWorkingCheckboxValue(false)
            : setCurrentlyWorkingCheckboxValue(true);
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
                                name="jobTitle"
                                placeholder="Job Title"
                                onChange={(e) => {
                                    handleChange(e);
                                    handleSkipWorkHistoryModal(e.target.value);
                                }}
                                className={
                                    inputIsOmitted(jobTitleValues) &&
                                    formikErrors.jobTitle &&
                                    touched.jobTitle
                                        ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                        : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                                }
                                maxLength={40}
                            />
                        </div>
                        {inputIsOmitted(jobTitleValues) &&
                            formikErrors.jobTitle &&
                            touched.jobTitle && (
                                <p className="ml-4 text-red-800">
                                    {formikErrors.jobTitle}
                                </p>
                            )}
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                onChange={(e) => {
                                    handleChange(e);
                                    handleSkipWorkHistoryModal(e.target.value);
                                }}
                                className={
                                    inputIsOmitted(companyValues) &&
                                    formikErrors.company &&
                                    touched.company
                                        ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                        : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                                }
                                maxLength={40}
                            />
                        </div>
                        {inputIsOmitted(companyValues) &&
                            formikErrors.company &&
                            touched.company && (
                                <p className="ml-4 text-red-800">
                                    {formikErrors.company}
                                </p>
                            )}
                    </div>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        name="cityWork"
                        placeholder="City"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={(e) => {
                            handleChange(e);
                            handleSkipWorkHistoryModal(e.target.value);
                        }}
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="stateWork"
                        placeholder="State / Country"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={(e) => {
                            handleChange(e);
                            handleSkipWorkHistoryModal(e.target.value);
                        }}
                        maxLength={40}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="yearStartWork"
                        placeholder="Year Start"
                        options={generateOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue('yearStartWork', e.value);
                            handleSkipWorkHistoryModal(e.value);
                        }}
                    />
                    <Select
                        name="monthStartWork"
                        placeholder="Month Start"
                        options={generateOptions(11, 12)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue('monthStartWork', e.value);
                            handleSkipWorkHistoryModal(e.value);
                        }}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="yearEndWork"
                        placeholder="Year End"
                        options={generateOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue('yearEndWork', e.value);
                            handleSkipWorkHistoryModal(e.value);
                        }}
                        isDisabled={currentlyWorkingCheckboxValue}
                    />
                    <Select
                        name="monthEndWork"
                        placeholder="Month End"
                        options={generateOptions(11, 12)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue('monthEndWork', e.value);
                            handleSkipWorkHistoryModal(e.value);
                        }}
                        isDisabled={currentlyWorkingCheckboxValue}
                    />
                </div>
                <div className="flex">
                    <label className="m-4 flex select-none text-base hover:cursor-pointer">
                        <input
                            type="checkbox"
                            name="currentlyWorkingCheckbox"
                            className="mr-3 w-4 hover:cursor-pointer"
                            checked={currentlyWorkingCheckboxValue}
                            onChange={(e) => {
                                handleCheckedState();
                                handleSkipWorkHistoryModal(e.target.value);
                            }}
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

export default WorkHistoryForm;
