import { useLocation, useNavigate, Route, Routes } from 'react-router-dom';

import { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import HeadingForm from '../path/form/HeadingForm';
import WorkHistoryForm from '../path/form/default-work-history/WorkHistoryForm';
import WorkResponsibilityForm from '../path/form/default-work-history/WorkResponsibilityForm';
import WorkHistorySummary from '../path/WorkHistorySummary';
import SkipWorkHistoryModal from '../path/SkipWorkHistoryModal';
import AdditionalWorkHistoryForm from '../path/form/additional-work-history/AdditionalWorkHistoryForm';
import AdditionalWorkResponsibilityForm from '../path/form/additional-work-history/AdditionalWorkResponsibilityForm';
import AdditionalWorkHistorySummary from '../path/AdditionalWorkHistorySummary';
import EducationForm from '../path/form/EducationForm';
import EducationSummary from '../path/EducationSummary';
import SkillsForm from '../path/form/SkillsForm';
import SummaryForm from '../path/form/SummaryForm';

import CVPreview from '../preview/CVPreview';

const FormValidation = () => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';

    const [showSkipWorkHistoryModal, setShowSkipWorkHistoryModal] =
        useState(true);
    const [skipEducation, setSkipEducation] = useState(true);

    // manage showing of errors on heading form
    const handleValidateOnChangeValue = () => {
        if (isOnHeadingPath) {
            return true;
        } else {
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
        } else if (isOnWorkHistoryPath && !showSkipWorkHistoryModal) {
            return {
                jobTitle: Yup.string().trim().required('Job title is required'),
                company: Yup.string().trim().required('Company is required')
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
            cityHeading: '',
            stateHeading: '',
            zipCode: '',
            phone: '',
            email: '',
            jobTitle: '',
            company: '',
            cityWork: '',
            stateWork: '',
            workResponsibilityOne: '',
            workResponsibilityTwo: '',
            workResponsibilityThree: '',
            workResponsibilityFour: '',
            secondJobTitle: '',
            secondCompany: '',
            secondCityWork: '',
            secondStateWork: '',
            secondWorkResponsibilityOne: '',
            secondWorkResponsibilityTwo: '',
            secondWorkResponsibilityThree: '',
            secondWorkResponsibilityFour: '',
            schoolName: '',
            schoolLocation: '',
            degree: '',
            fieldOfStudy: '',
            skillOne: '',
            skillTwo: '',
            skillThree: '',
            skillFour: '',
            skillFive: ''
        },
        validationSchema: Yup.object(handleSchema()),
        onSubmit: () => {
            // eslint-disable-next-line default-case
            switch (pathname) {
                case '/':
                    navigate('/work-history');
                    break;
                case '/work-history':
                    if (!showSkipWorkHistoryModal) {
                        navigate('/work-responsibility');
                    } else if (showSkipWorkHistoryModal) {
                        navigate('/skip-work-history');
                    }
                    break;
                case '/work-responsibility':
                    navigate('/work-history-summary');
                    break;
                case '/work-history-summary':
                    navigate('/education');
                    break;
                case '/additional-work-history':
                    navigate('/additional-work-responsibility');
                    break;
                case '/additional-work-responsibility':
                    navigate('/additional-work-history-summary');
                    break;
                case '/additional-work-history-summary':
                    navigate('/education');
                    break;
                case '/education':
                    if (!skipEducation) {
                        navigate('/education-summary');
                    } else if (skipEducation) {
                        navigate('/skills');
                    }
                    break;
                case '/education-summary':
                    navigate('/skills');
                    break;
                case '/skills':
                    navigate('/summary');
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
        workResponsibilityOne,
        workResponsibilityTwo,
        workResponsibilityThree,
        workResponsibilityFour,
        secondYearStartWork,
        secondMonthStartWork,
        secondYearEndWork,
        secondMonthEndWork,
        secondJobTitle,
        secondCompany,
        secondCityWork,
        secondStateWork,
        secondWorkResponsibilityOne,
        secondWorkResponsibilityTwo,
        secondWorkResponsibilityThree,
        secondWorkResponsibilityFour,
        yearStartGraduation,
        monthStartGraduation,
        schoolName,
        schoolLocation,
        degree,
        fieldOfStudy,
        skillOne,
        skillTwo,
        skillThree,
        skillFour,
        skillFive
    } = formik.values;

    const [currentlyWorkingCheckboxValue, setCurrentlyWorkingCheckboxValue] =
        useState(false);
    const [
        secondCurrentlyWorkingCheckboxValue,
        setSecondCurrentlyWorkingCheckboxValue
    ] = useState(false);

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
                            setShowSkipWorkHistoryModal={
                                setShowSkipWorkHistoryModal
                            }
                            showSkipWorkHistoryModal={showSkipWorkHistoryModal}
                            currentlyWorkingCheckboxValue={
                                currentlyWorkingCheckboxValue
                            }
                            setCurrentlyWorkingCheckboxValue={
                                setCurrentlyWorkingCheckboxValue
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
                        />
                    }
                />
                <Route
                    path="/skip-work-history"
                    element={<SkipWorkHistoryModal />}
                />
                <Route
                    path="/additional-work-history"
                    element={
                        <AdditionalWorkHistoryForm
                            secondCurrentlyWorkingCheckboxValue={
                                secondCurrentlyWorkingCheckboxValue
                            }
                            setSecondCurrentlyWorkingCheckboxValue={
                                setSecondCurrentlyWorkingCheckboxValue
                            }
                            handleSubmit={formik.handleSubmit}
                            handleChange={formik.handleChange}
                            setFieldValue={formik.setFieldValue}
                        />
                    }
                />
                <Route
                    path="/additional-work-responsibility"
                    element={
                        <AdditionalWorkResponsibilityForm
                            handleSubmit={formik.handleSubmit}
                            handleChange={formik.handleChange}
                        />
                    }
                />
                <Route
                    path="/additional-work-history-summary"
                    element={
                        <AdditionalWorkHistorySummary
                            handleSubmit={formik.handleSubmit}
                        />
                    }
                />
                <Route
                    path="/education"
                    element={
                        <EducationForm
                            setSkipEducation={setSkipEducation}
                            handleSubmit={formik.handleSubmit}
                            handleChange={formik.handleChange}
                            setFieldValue={formik.setFieldValue}
                        />
                    }
                />
                <Route
                    path="/education-summary"
                    element={
                        <EducationSummary handleSubmit={formik.handleSubmit} />
                    }
                />
                <Route
                    path="/skills"
                    element={
                        <SkillsForm
                            handleSubmit={formik.handleSubmit}
                            handleChange={formik.handleChange}
                        />
                    }
                />
                <Route
                    path="/summary"
                    element={
                        <SummaryForm
                            handleSubmit={formik.handleSubmit}
                            handleChange={formik.handleChange}
                        />
                    }
                />
            </Routes>

            <CVPreview
                firstNameInput={capitalizeFirstLetterOfEachWord(firstName)}
                lastNameInput={capitalizeFirstLetterOfEachWord(lastName)}
                professionInput={capitalizeFirstLetterOfEachWord(profession)}
                cityHeadingInput={capitalizeFirstLetterOfEachWord(cityHeading)}
                stateHeadingInput={capitalizeFirstLetterOfEachWord(
                    stateHeading
                )}
                countryInput={capitalizeFirstLetterOfEachWord(country)}
                zipCodeInput={zipCode}
                phoneInput={phone}
                emailInput={lowerCaseEachLetter(email)}
                yearStartWorkInput={yearStartWork}
                monthStartWorkInput={monthStartWork}
                yearEndWorkInput={yearEndWork}
                monthEndWorkInput={monthEndWork}
                currentlyWorkingCheckboxValue={currentlyWorkingCheckboxValue}
                jobTitleInput={capitalizeFirstLetterOfEachWord(jobTitle)}
                companyInput={capitalizeFirstLetterOfEachWord(company)}
                cityWorkInput={capitalizeFirstLetterOfEachWord(cityWork)}
                stateWorkInput={capitalizeFirstLetterOfEachWord(stateWork)}
                workResponsibilityOneInput={capitaliseFirstLetter(
                    workResponsibilityOne
                )}
                workResponsibilityTwoInput={capitaliseFirstLetter(
                    workResponsibilityTwo
                )}
                workResponsibilityThreeInput={capitaliseFirstLetter(
                    workResponsibilityThree
                )}
                workResponsibilityFourInput={capitaliseFirstLetter(
                    workResponsibilityFour
                )}
                secondYearStartWorkInput={secondYearStartWork}
                secondMonthStartWorkInput={secondMonthStartWork}
                secondYearEndWorkInput={secondYearEndWork}
                secondMonthEndWorkInput={secondMonthEndWork}
                secondCurrentlyWorkingCheckboxValue={
                    secondCurrentlyWorkingCheckboxValue
                }
                secondJobTitleInput={capitaliseFirstLetter(secondJobTitle)}
                secondCompanyInput={capitalizeFirstLetterOfEachWord(
                    secondCompany
                )}
                secondCityWorkInput={capitalizeFirstLetterOfEachWord(
                    secondCityWork
                )}
                secondStateWorkInput={capitalizeFirstLetterOfEachWord(
                    secondStateWork
                )}
                secondWorkResponsibilityOneInput={capitaliseFirstLetter(
                    secondWorkResponsibilityOne
                )}
                secondWorkResponsibilityTwoInput={capitaliseFirstLetter(
                    secondWorkResponsibilityTwo
                )}
                secondWorkResponsibilityThreeInput={capitaliseFirstLetter(
                    secondWorkResponsibilityThree
                )}
                secondWorkResponsibilityFourInput={capitaliseFirstLetter(
                    secondWorkResponsibilityFour
                )}
                yearStartGraduationInput={yearStartGraduation}
                monthStartGraduationInput={monthStartGraduation}
                schoolNameInput={capitalizeFirstLetterOfEachWord(schoolName)}
                schoolLocationInput={capitalizeFirstLetterOfEachWord(
                    schoolLocation
                )}
                degreeInput={capitalizeFirstLetterOfEachWord(degree)}
                fieldOfStudyInput={capitalizeFirstLetterOfEachWord(
                    fieldOfStudy
                )}
                skillOneInput={capitaliseFirstLetter(skillOne)}
                skillTwoInput={capitaliseFirstLetter(skillTwo)}
                skillThreeInput={capitaliseFirstLetter(skillThree)}
                skillFourInput={capitaliseFirstLetter(skillFour)}
                skillFiveInput={capitaliseFirstLetter(skillFive)}
            />
        </>
    );
};

export default FormValidation;
