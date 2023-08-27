import { useLocation, useNavigate, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import HeadingForm from '../path/form/HeadingForm';
import WorkHistoryForm from '../path/form/WorkHistoryForm';
import WorkResponsibilityForm from '../path/form/WorkResponsibilityForm';
import WorkHistorySummary from '../path/summary/WorkHistorySummary';
import SkipWorkHistoryModal from '../path/modal/SkipWorkHistoryModal';
import EducationForm from '../path/form/EducationForm';

import CVPreview from '../preview/CVPreview';

const FormValidation = () => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';
    const isOnWorkResponsibilityPath = pathname === '/work-responsibility';

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
                firstName: Yup.string()
                    .trim()
                    .required('First name is required'),
                lastName: Yup.string().trim().required('Last name is required'),
                email: Yup.string()
                    .trim()
                    .required('Email is required')
                    .email('Email is invalid')
            };
        } else if (isOnWorkHistoryPath && showSkipWorkHistoryModal === false) {
            return {
                jobTitle: Yup.string().trim().required('Job title is required'),
                company: Yup.string().trim().required('Company is required')
            };
        }
    };

    const navigate = useNavigate();

    const formik = useFormik({
        validateOnChange: handleValidateOnChangeValue(),
        enableReinitialize: true,
        initialValues: {
            firstName: '',
            lastName: '',
            profession: '',
            country: '',
            cityHeading: '',
            stateHeading: '',
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
                        navigate('/work-responsibility');
                    } else if (showSkipWorkHistoryModal === true) {
                        navigate('/skip-work-history');
                    }
                    break;
                case '/work-responsibility':
                    navigate('/work-history-summary');
                    break;
                case '/work-history-summary':
                    navigate('/education');
                    break;
            }
        }
    });

    const {
        firstName,
        lastName,
        profession,
        country,
        cityHeading,
        stateHeading,
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

    const [addAnotherWorkPosition, setAddAnotherWorkPosition] = useState(false);

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
                            handleChange={formik.handleChange}
                            formikErrors={formik.errors}
                            touched={formik.touched}
                        />
                    }
                />
                <Route
                    path="/work-history"
                    element={
                        <WorkHistoryForm
                            setCurrentlyWorkingCheckboxValue={
                                setCurrentlyWorkingCheckboxValue
                            }
                            showSkipWorkHistoryModal={showSkipWorkHistoryModal}
                            currentlyWorkingCheckboxValue={
                                currentlyWorkingCheckboxValue
                            }
                            setShowSkipWorkHistoryModal={
                                setShowSkipWorkHistoryModal
                            }
                            handleSubmit={formik.handleSubmit}
                            handleChange={formik.handleChange}
                            jobTitleValues={jobTitle}
                            formikErrors={formik.errors}
                            touched={formik.touched}
                            companyValues={company}
                            setFieldValue={formik.setFieldValue}
                        />
                    }
                />
                <Route
                    path="/work-responsibility"
                    element={
                        <WorkResponsibilityForm
                            handleSubmit={formik.handleSubmit}
                            handleChange={formik.handleChange}
                        />
                    }
                />
                <Route
                    path="/work-history-summary"
                    element={
                        <WorkHistorySummary
                            handleSubmit={formik.handleSubmit}
                            setAddAnotherWorkPosition={
                                setAddAnotherWorkPosition
                            }
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
                cityHeadingInput={capitalizeFirstLetterOfEachWord(cityHeading)}
                stateHeadingInput={capitalizeFirstLetterOfEachWord(
                    stateHeading
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
                addAnotherWorkPosition={addAnotherWorkPosition}
            />
        </>
    );
};

export default FormValidation;
