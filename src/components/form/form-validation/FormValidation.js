import { useLocation, useNavigate, Routes, Route } from "react-router-dom";

import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import HeadingForm from "../HeadingForm";
import WorkHistoryForm from "../WorkHistoryForm";
import EducationForm from "../EducationForm";
import SkipWorkHistoryModal from "../modal/SkipWorkHistoryModal";

import CVPreview from "../../preview/CVPreview";

const FormValidation = () => {
    const [showWorkHistoryModal, setShowWorkHistoryModal] = useState(true);

    const generateSchema = () => {
        if (pathname === "/") {
            return {
                firstName: Yup.string().required("First name is required"),
                lastName: Yup.string().required("Last name is required"),
                email: Yup.string()
                    .required("Email is required")
                    .email("Email is invalid"),
            };
        } else if (pathname === "/work-history" && showWorkHistoryModal === false) {
            return {
                jobTitle: Yup.string().required("Job title is required"),
                company: Yup.string().required("Company is required"),
            };
        }
    };

    const pathname = useLocation().pathname;

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            profession: "",
            country: "",
            cityContact: "",
            stateContact: "",
            zipCode: "",
            phone: "",
            email: "",
            jobTitle: "",
            company: "",
            cityWork: "",
            stateWork: "",
        },
        validationSchema: Yup.object(generateSchema()),
        onSubmit: () => {
            // eslint-disable-next-line default-case
            switch (pathname) {
                case "/":
                    navigate("/work-history");
                    break;
                case "/work-history":
                    if (showWorkHistoryModal === false) {
                        navigate("/education");
                    } else if (showWorkHistoryModal === true) {
                        navigate("/showWorkHistoryModal");
                    }
                    break;
            }
        },
    });

    const {
        firstName,
        lastName,
        profession,
        country,
        cityContact,
        stateContact,
        zipCode,
        phone,
        email,
        jobTitle,
        company,
        cityWork,
        stateWork,
        yearStartWork,
        monthStartWork,
        yearEndWork,
        monthEndWork,
        currentlyWorkingCheckbox,
    } = formik.values;

    const capitaliseFirstLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };

    const capitalizeFirstLetterOfEachWord = (input) => {
        // capitalize first letter of each word
        return input.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
        );
    };

    const lowerCaseEachLetter = (input) => {
        return input.toLowerCase();
    };

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HeadingForm
                            handleSubmit={formik.handleSubmit}
                            formikErrors={formik.errors}
                            touched={formik.touched}
                            firstNameValues={firstName}
                            handleChange={formik.handleChange}
                            lastNameValues={lastName}
                            professionValues={profession}
                            countryValues={country}
                            cityContactValues={cityContact}
                            stateContactValues={stateContact}
                            zipCodeValues={zipCode}
                            phoneValues={phone}
                            emailValues={email}
                        />
                    }
                />
                <Route
                    path="/work-history"
                    element={
                        <WorkHistoryForm
                            setShowWorkHistoryModal={setShowWorkHistoryModal}
                            handleSubmit={formik.handleSubmit}
                            formikErrors={formik.errors}
                            touched={formik.touched}
                            jobTitleValues={jobTitle}
                            handleChange={formik.handleChange}
                            companyValues={company}
                            cityWorkValues={cityWork}
                            stateWorkValues={stateWork}
                            currentlyWorkingCheckbox={currentlyWorkingCheckbox}
                            setFieldValue={formik.setFieldValue}
                        />
                    }
                />
                <Route path="/education" element={<EducationForm />} />
                <Route
                    path="/showWorkHistoryModal"
                    element={<SkipWorkHistoryModal />}
                />
            </Routes>

            <CVPreview
                firstNameInput={capitalizeFirstLetterOfEachWord(firstName)}
                lastNameInput={capitalizeFirstLetterOfEachWord(lastName)}
                professionInput={capitalizeFirstLetterOfEachWord(profession)}
                countryInput={capitalizeFirstLetterOfEachWord(country)}
                cityContactInput={capitalizeFirstLetterOfEachWord(cityContact)}
                stateContactInput={capitalizeFirstLetterOfEachWord(stateContact)}
                zipCodeInput={zipCode}
                phoneInput={phone}
                emailInput={lowerCaseEachLetter(email)}
                jobTitleInput={capitalizeFirstLetterOfEachWord(jobTitle)}
                companyInput={capitalizeFirstLetterOfEachWord(company)}
                cityWorkInput={capitalizeFirstLetterOfEachWord(cityWork)}
                stateWorkInput={capitalizeFirstLetterOfEachWord(stateWork)}
                yearStartWorkInput={yearStartWork}
                monthStartWorkInput={monthStartWork}
                yearEndWorkInput={yearEndWork}
                monthEndWorkInput={monthEndWork}
                currentlyWorkingCheckboxState={currentlyWorkingCheckbox}
            />
        </>
    );
};

export default FormValidation;
