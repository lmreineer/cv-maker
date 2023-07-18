import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Select from "react-select";

const WorkHistoryForm = ({
    handleChange,
    setShowWorkHistoryModal,
    handleSubmit,
    formikErrors,
    touched,
    jobTitleValues,
    companyValues,
    cityWorkValues,
    stateWorkValues,
    setFieldValue,
    currentlyWorkingCheckbox,
}) => {
    const handleChangeAndModal = (e) => {
        handleChange(e);
        e.target.value !== ""
            ? setShowWorkHistoryModal(false)
            : setShowWorkHistoryModal(true);
    };

    const getOptions = (loop, n) => {
        const options = [];
        for (let i = 0; i <= loop; i += 1) {
            const year = n - i;
            options.push({ value: year.toString(), label: year.toString() });
        }

        options.forEach((month) => {
            if (month.value.length === 1) {
                month.value = `0${month.value}`;
                month.label = `0${month.label}`;
            }
        });

        return options;
    };

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

    const [checked, setChecked] = useState(false);
    const handleCheckedState = () => {
        checked === false ? setChecked(true) : setChecked(false);
    };

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate("/");
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
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
                                    jobTitleValues === "" &&
                                        companyValues !== "" &&
                                        formikErrors.jobTitle &&
                                        touched.jobTitle
                                        ? "border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 w-full"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                                }
                                value={jobTitleValues}
                                onChange={(e) => handleChangeAndModal(e)}
                                maxLength={40}
                            />
                        </div>
                        {jobTitleValues === "" &&
                            companyValues !== "" &&
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
                                    companyValues === "" &&
                                        jobTitleValues !== "" &&
                                        formikErrors.company &&
                                        touched.company
                                        ? "border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 w-full"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                                }
                                value={companyValues}
                                onChange={(e) => handleChangeAndModal(e)}
                                maxLength={40}
                            />
                        </div>
                        {companyValues === "" &&
                            jobTitleValues !== "" &&
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
                        onChange={(e) => handleChangeAndModal(e)}
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="stateWork"
                        placeholder="State / Country"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        value={stateWorkValues}
                        onChange={(e) => handleChangeAndModal(e)}
                        maxLength={40}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="yearStartWork"
                        placeholder="Year Start"
                        options={getOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("yearStartWork", e.value);
                        }}
                    />
                    <Select
                        name="monthStartWork"
                        placeholder="Month Start"
                        options={getOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("monthStartWork", e.value);
                        }}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="yearEndWork"
                        placeholder="Year End"
                        options={getOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("yearEndWork", e.value);
                        }}
                        isDisabled={checked}
                    />
                    <Select
                        name="monthEndWork"
                        placeholder="Month End"
                        options={getOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("monthEndWork", e.value);
                        }}
                        isDisabled={checked}
                    />
                </div>
                <div className="flex">
                    <label className="flex m-4 text-base select-none hover:cursor-pointer">
                        <input
                            type="checkbox"
                            name="currentlyWorkingCheckbox"
                            className="mr-3 w-4 hover:cursor-pointer"
                            onClick={handleCheckedState}
                            value={currentlyWorkingCheckbox}
                            onChange={(e) => handleChangeAndModal(e)}
                        />
                        I currently work here
                    </label>
                </div>
                <div className="flex justify-around">
                    <input
                        type="button"
                        className="bg-gray-300 hover:bg-gray-400 transition p-5 w-56 rounded-lg my-10"
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
