import Select from "react-select";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const WorkHistoryForm = ({
    handleSubmit,
    formikErrors,
    jobTitleValues,
    companyValues,
    cityWorkValues,
    stateWorkValues,
    currentlyWorkingCheckbox,
    handleChange,
    touched,
    setFieldValue,
    setShowWorkHistoryModal,
}) => {
    const yearList = [];
    for (let i = 0; i <= 70; i += 1) {
        const year = 2023 - i;
        yearList.push({ value: year.toString(), label: year.toString() });
    }

    const monthList = [];
    for (let i = 1; i <= 12; i += 1) {
        monthList.push({ value: i.toString(), label: i.toString() });
    }

    monthList.forEach((el) => {
        if (el.value.length === 1) {
            el.value = `0${el.value}`;
            el.label = `0${el.label}`;
        }
    });

    const [checked, setChecked] = useState(false);

    const handleCheckedState = () => {
        checked === false ? setChecked(true) : setChecked(false);
    };

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate("/");
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

    const handleChangeAndModal = (e) => {
        handleChange(e);
        e.target.value !== ""
            ? setShowWorkHistoryModal(true)
            : setShowWorkHistoryModal(false);
    };

    const jobTitleInputIsLeftOut =
        jobTitleValues === "" &&
        (companyValues !== "" || cityWorkValues !== "" || stateWorkValues !== "");

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center w-1/2"
            >
                <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-cabin tracking-wider text-very-dark-yellow-green">
                    Work History:
                </h1>
                <div className="flex justify-center">
                    <div
                        className={
                            jobTitleInputIsLeftOut &&
                                formikErrors.jobTitle &&
                                touched.jobTitle
                                ? "flex flex-col justify-center w-full"
                                : "flex justify-center w-full"
                        }
                    >
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title"
                            className={
                                jobTitleInputIsLeftOut &&
                                    formikErrors.jobTitle &&
                                    touched.jobTitle
                                    ? "border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                            }
                            value={jobTitleValues}
                            onChange={(e) => handleChangeAndModal(e)}
                            maxLength={40}
                        />
                        {jobTitleInputIsLeftOut &&
                            formikErrors.jobTitle &&
                            touched.jobTitle && (
                                <p className="ml-4 text-red-800">{formikErrors.jobTitle}</p>
                            )}
                    </div>
                    <div className="flex justify-center w-full h-[5.25rem]">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                            value={companyValues}
                            onChange={(e) => handleChangeAndModal(e)}
                            maxLength={40}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
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
                <div className="flex justify-center">
                    <Select
                        name="yearStartWork"
                        placeholder="Year Start"
                        options={yearList}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("yearStartWork", e.value);
                        }}
                    />
                    <Select
                        name="monthStartWork"
                        placeholder="Month Start"
                        options={monthList}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("monthStartWork", e.value);
                        }}
                    />
                </div>
                <div className="flex justify-around">
                    <Select
                        name="yearEndWork"
                        placeholder="Year End"
                        options={yearList}
                        styles={customStyles}
                        onChange={(e) => {
                            setFieldValue("yearEndWork", e.value);
                        }}
                        isDisabled={checked}
                    />
                    <Select
                        name="monthEndWork"
                        placeholder="Month End"
                        options={monthList}
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
                    <button
                        className="bg-gray-300 hover:bg-gray-400 transition p-5 w-56 rounded-lg my-10"
                        onClick={navigateBack}
                    >
                        Back
                    </button>
                    <input
                        type="submit"
                        id="continue-button"
                        className="bg-yellow-green hover:bg-dark-yellow-green hover:cursor-pointer transition p-5 w-56 rounded-lg my-10"
                        value="Continue"
                    />
                </div>
            </form>
        </>
    );
};

export default WorkHistoryForm;
