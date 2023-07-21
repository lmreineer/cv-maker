import { useNavigate } from "react-router-dom";

import Select from "react-select";

const WorkHistoryForm = ({
    currentlyWorkingCheckboxValue,
    setCurrentlyWorkingCheckboxValue,
    handleChange,
    setShowSkipWorkHistoryModal,
    showSkipWorkHistoryModal,
    handleSubmit,
    jobTitleValues,
    companyValues,
    formikErrors,
    touched,
    cityWorkValues,
    stateWorkValues,
    setFieldValue,
}) => {
    const handleCheckedState = () => {
        currentlyWorkingCheckboxValue === true
            ? setCurrentlyWorkingCheckboxValue(false)
            : setCurrentlyWorkingCheckboxValue(true);
    };

    // check if main input is omitted after inputting other non-main input
    const inputIsOmitted = (omittedInput) => {
        // main input is omitted but the state is false already
        return omittedInput === "" && showSkipWorkHistoryModal === false;
    };

    const handleSkipWorkHistoryModal = (e) => {
        e !== ""
            ? setShowSkipWorkHistoryModal(false)
            : setShowSkipWorkHistoryModal(true);
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
            border: "2px solid #E5E7EB",
            boxShadow: "none",
            margin: "0.75rem",
            paddingLeft: "1rem",
            height: "3.75rem",
            borderRadius: "0.5rem",
            "&:hover": {
                border: "2px solid #7B8B5E",
            },
        }),
    };

    const navigate = useNavigate();
    const navigateBack = () => {
        navigate("/");
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                    setCurrentlyWorkingCheckboxValue(false);
                }}
                className="w-2/4 flex flex-col justify-center"
            >
                <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-cabin tracking-wider text-very-dark-yellow-green">
                    Work History:
                </h1>
                <div className="flex">
                    <div className="w-full">
                        <div className="flex">
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Job Title"
                                className={
                                    inputIsOmitted(jobTitleValues) &&
                                        formikErrors.jobTitle &&
                                        touched.jobTitle
                                        ? "border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 w-full"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                                }
                                value={jobTitleValues}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleSkipWorkHistoryModal(e.target.value);
                                }}
                                maxLength={40}
                            />
                        </div>
                        {inputIsOmitted(jobTitleValues) &&
                            formikErrors.jobTitle &&
                            touched.jobTitle && (
                                <p className="ml-4 text-red-800">{formikErrors.jobTitle}</p>
                            )}
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                className={
                                    inputIsOmitted(companyValues) &&
                                        formikErrors.company &&
                                        touched.company
                                        ? "border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 w-full"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                                }
                                value={companyValues}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleSkipWorkHistoryModal(e.target.value);
                                }}
                                maxLength={40}
                            />
                        </div>
                        {inputIsOmitted(companyValues) &&
                            formikErrors.company &&
                            touched.company && (
                                <p className="ml-4 text-red-800">{formikErrors.company}</p>
                            )}
                    </div>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        name="cityWork"
                        placeholder="City"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        value={cityWorkValues}
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
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        value={stateWorkValues}
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
                            setFieldValue("yearStartWork", e.value);
                            handleSkipWorkHistoryModal(e.value);
                        }}
                    />
                    <Select
                        name="monthStartWork"
                        placeholder="Month Start"
                        options={generateOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("monthStartWork", e.value);
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
                            setFieldValue("yearEndWork", e.value);
                            handleSkipWorkHistoryModal(e.value);
                        }}
                        isDisabled={currentlyWorkingCheckboxValue}
                    />
                    <Select
                        name="monthEndWork"
                        placeholder="Month End"
                        options={generateOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("monthEndWork", e.value);
                            handleSkipWorkHistoryModal(e.value);
                        }}
                        isDisabled={currentlyWorkingCheckboxValue}
                    />
                </div>
                <div className="flex">
                    <label className="flex m-4 text-base select-none hover:cursor-pointer">
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
                        className="bg-gray-300 hover:bg-gray-400 hover:cursor-pointer transition p-5 w-56 rounded-lg my-10"
                        onClick={navigateBack}
                        value="Back"
                    />
                    <input
                        type="submit"
                        className="bg-yellow-green hover:bg-dark-yellow-green hover:cursor-pointer transition p-5 w-56 rounded-lg my-10"
                        value="Continue"
                    />
                </div>
            </form>
        </>
    );
};

export default WorkHistoryForm;
