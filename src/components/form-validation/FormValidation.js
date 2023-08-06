import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import HeadingForm from '../path/form/HeadingForm';
import WorkHistoryForm from '../path/form/WorkHistoryForm';
import WorkResponsibilitiesForm from '../path/form/WorkResponsibilitiesForm';
import WorkHistorylist from '../path/list/WorkHistoryList';
import SkipWorkHistoryModal from '../path/modal/SkipWorkHistoryModal';
import EducationForm from '../path/form/EducationForm';

import CVPreview from '../preview/CVPreview';

const FormValidation = () => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';

    const [showSkipWorkHistoryModal, setShowSkipWorkHistoryModal] =
        useState(true);

    const handleValidateOnChangeValue = () => {
        if (isOnHeadingPath) {
            return true;
        } else if (isOnWorkHistoryPath) {
            return false;
        }
    };

    const handleSchema = () => {
        if (isOnHeadingPath) {
            return {
                firstName: Yup.string().required('First name is required'),
                lastName: Yup.string().required('Last name is required'),
                email: Yup.string()
                    .required('Email is required')
                    .email('Email is invalid')
            };
        } else if (isOnWorkHistoryPath && showSkipWorkHistoryModal === false) {
            return {
                jobTitle: Yup.string().required('Job title is required'),
                company: Yup.string().required('Company is required')
            };
        }
    };

    const navigate = useNavigate();

    const formik = useFormik({
        validateOnChange: handleValidateOnChangeValue(),
        initialValues: {
            firstName: '',
            lastName: '',
            profession: '',
            country: '',
            cityContact: '',
            stateContact: '',
            zipCode: '',
            phone: '',
            email: '',
            jobTitle: '',
            company: '',
            cityWork: '',
            stateWork: '',
            bulletPointOne: '',
            bulletPointTwo: '',
            bulletPointThree: '',
            bulletPointFour: ''
        },
        validationSchema: Yup.object(handleSchema()),
        onSubmit: () => {
            // eslint-disable-next-line default-case
            switch (pathname) {
                case '/':
                    navigate('/work-history');
                    break;
                case '/work-history':
                    if (showSkipWorkHistoryModal === false) {
                        navigate('/work-responsibilities');
                    } else if (showSkipWorkHistoryModal === true) {
                        navigate('/skip-work-history');
                    }
                    break;
                case '/work-responsibilities':
                    navigate('/work-history-list');
                    break;
            }
        }
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
        bulletPointOne,
        bulletPointTwo,
        bulletPointThree,
        bulletPointFour
    } = formik.values;

    const [currentlyWorkingCheckboxValue, setCurrentlyWorkingCheckboxValue] =
        useState(false);

    const capitaliseFirstLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };

    const capitalizeFirstLetterOfEachWord = (input) => {
        // capitalize first letter of each word
        return input.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
        );
    };

    const lowerCaseEachLetter = (input) => input.toLowerCase();

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
                            currentlyWorkingCheckboxValue={
                                currentlyWorkingCheckboxValue
                            }
                            setCurrentlyWorkingCheckboxValue={
                                setCurrentlyWorkingCheckboxValue
                            }
                            handleChange={formik.handleChange}
                            setShowSkipWorkHistoryModal={
                                setShowSkipWorkHistoryModal
                            }
                            showSkipWorkHistoryModal={showSkipWorkHistoryModal}
                            handleSubmit={formik.handleSubmit}
                            jobTitleValues={jobTitle}
                            companyValues={company}
                            formikErrors={formik.errors}
                            touched={formik.touched}
                            cityWorkValues={cityWork}
                            stateWorkValues={stateWork}
                            setFieldValue={formik.setFieldValue}
                        />
                    }
                />
                <Route
                    path="/work-responsibilities"
                    element={
                        <WorkResponsibilitiesForm
                            handleSubmit={formik.handleSubmit}
                            bulletPointOneValues={bulletPointOne}
                            handleChange={formik.handleChange}
                            bulletPointTwoValues={bulletPointTwo}
                            bulletPointThreeValues={bulletPointThree}
                            bulletPointFourValues={bulletPointFour}
                        />
                    }
                />
                <Route
                    path="/skip-work-history"
                    element={<SkipWorkHistoryModal />}
                />
                <Route path="/education" element={<EducationForm />} />
            </Routes>

            <CVPreview
                firstNameInput={capitalizeFirstLetterOfEachWord(firstName)}
                lastNameInput={capitalizeFirstLetterOfEachWord(lastName)}
                professionInput={capitalizeFirstLetterOfEachWord(profession)}
                countryInput={capitalizeFirstLetterOfEachWord(country)}
                cityContactInput={capitalizeFirstLetterOfEachWord(cityContact)}
                stateContactInput={capitalizeFirstLetterOfEachWord(
                    stateContact
                )}
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
                currentlyWorkingCheckboxValue={currentlyWorkingCheckboxValue}
                bulletPointOneInput={capitaliseFirstLetter(bulletPointOne)}
                bulletPointTwoInput={capitaliseFirstLetter(bulletPointTwo)}
                bulletPointThreeInput={capitaliseFirstLetter(bulletPointThree)}
                bulletPointFourInput={capitaliseFirstLetter(bulletPointFour)}
            />
        </>
    );
};

export default FormValidation;
