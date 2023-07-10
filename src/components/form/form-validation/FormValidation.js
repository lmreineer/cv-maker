import { useLocation, useNavigate, Routes, Route } from "react-router-dom";

import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import HeadingForm from "../HeadingForm";
import WorkHistoryForm from "../WorkHistoryForm";
import EducationForm from "../EducationForm";
import Asd from "../Asd";

import CVPreview from "../../preview/CVPreview";

const FormValidation = () => {
    const pathname = useLocation().pathname;

    const navigate = useNavigate();

    const [asd, setAsd] = useState(false);

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

        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
                .required("Email is required")
                .email("Email is invalid"),
        }),


        onSubmit: () => {
            // eslint-disable-next-line default-case
            switch (pathname) {
                case "/":
                    navigate("/work-history");
                    break;
                case "/work-history":
                    if (asd === true) {
                        navigate("/education");
                    } else if (asd === false) {
                        navigate("/asd");
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
                            firstNameValues={firstName}
                            lastNameValues={lastName}
                            professionValues={profession}
                            countryValues={country}
                            cityContactValues={cityContact}
                            stateContactValues={stateContact}
                            zipCodeValues={zipCode}
                            phoneValues={phone}
                            emailValues={email}
                            handleChange={formik.handleChange}
                        />
                    }
                />
                <Route
                    path="/work-history"
                    element={
                        <WorkHistoryForm
                            handleSubmit={formik.handleSubmit}
                            jobTitleValues={jobTitle}
                            companyValues={company}
                            cityWorkValues={cityWork}
                            stateWorkValues={stateWork}
                            currentlyWorkingCheckbox={currentlyWorkingCheckbox}
                            handleChange={formik.handleChange}
                            setFieldValue={formik.setFieldValue}
                            setAsd={setAsd}
                        />
                    }
                />
                <Route path="/education" element={<EducationForm />} />
                <Route path="/asd" element={<Asd />} />
            </Routes>

            <CVPreview
                firstNameInput={capitaliseFirstLetter(firstName)}
                lastNameInput={capitaliseFirstLetter(lastName)}
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
