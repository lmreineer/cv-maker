import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Route, Routes } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    HeadingForm,
    WorkHistoryForm,
    WorkResponsibilityForm,
    WorkHistorySummary,
    SkipWorkHistoryModal,
    AdditionalWorkHistoryForm,
    AdditionalWorkResponsibilityForm,
    AdditionalWorkHistorySummary,
    EducationForm,
    EducationSummary,
    AdditionalEducationForm,
    AdditionalEducationSummary,
    SkillsForm,
    SummaryForm,
    Final,
    CVPreview
} from './components';

const FormValidation = ({ componentRef }) => {
    const [showSkipWorkHistoryModal, setShowSkipWorkHistoryModal] =
        useState(true);
    const [skipEducation, setSkipEducation] = useState(true);
    const [currentlyWorkingCheckboxValue, setCurrentlyWorkingCheckboxValue] =
        useState(false);
    const [
        secondCurrentlyWorkingCheckboxValue,
        setSecondCurrentlyWorkingCheckboxValue
    ] = useState(false);

    // React router hooks
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleValidateOnChangeValue = () => {
        return pathname === '/';
    };

    const handleValidationSchema = () => {
        // If the current URL is at the first or heading form
        if (pathname === '/') {
            return Yup.object({
                firstName: Yup.string()
                    .trim()
                    .required('First name is required'),
                lastName: Yup.string().trim().required('Last name is required'),
                email: Yup.string()
                    .trim()
                    .required('Email is required')
                    .email('Email is invalid')
            });
            // Else if the current URL is at the work history form and skip work history modal is not shown
        } else if (pathname === '/work-history' && !showSkipWorkHistoryModal) {
            return Yup.object({
                jobTitle: Yup.string().trim().required('Job title is required'),
                company: Yup.string().trim().required('Company is required')
            });
        }
    };

    const paths = {
        heading: '/',
        workHistory: '/work-history',
        workResponsibility: '/work-responsibility',
        workHistorySummary: '/work-history-summary',
        skipWorkHistory: '/skip-work-history',
        additionalWorkHistory: '/additional-work-history',
        additionalWorkResponsibility: '/additional-work-responsibility',
        additionalWorkHistorySummary: '/additional-work-history-summary',
        education: '/education',
        educationSummary: '/education-summary',
        additionalEducation: '/additional-education',
        additionalEducationSummary: '/additional-education-summary',
        skills: '/skills',
        summary: '/summary',
        final: '/final'
    };

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
            skillOne: '',
            skillTwo: '',
            skillThree: '',
            skillFour: '',
            skillFive: '',
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
            degree: '',
            fieldOfStudy: '',
            schoolName: '',
            schoolLocation: '',
            secondYearStartGraduation: '',
            secondMonthStartGraduation: '',
            secondDegree: '',
            secondFieldOfStudy: '',
            secondSchoolName: '',
            secondSchoolLocation: '',
            summary: ''
        },
        validationSchema: handleValidationSchema(),
        onSubmit: () => {
            // Define a mapping of pathnames to destination pathnames
            const pathMap = {
                '/': '/work-history',
                '/work-history': showSkipWorkHistoryModal
                    ? '/skip-work-history'
                    : '/work-responsibility',
                '/work-responsibility': '/work-history-summary',
                '/work-history-summary': '/education',
                '/additional-work-history': '/additional-work-responsibility',
                '/additional-work-responsibility':
                    '/additional-work-history-summary',
                '/additional-work-history-summary': '/education',
                '/education': skipEducation ? '/skills' : '/education-summary',
                '/education-summary': '/skills',
                '/additional-education': skipEducation
                    ? '/skills'
                    : '/additional-education-summary',
                '/additional-education-summary': '/skills',
                '/skills': '/summary',
                '/summary': '/final'
            };

            // Determine the destination based on the current pathname
            const destinationPath = pathMap[pathname];

            // Navigate to the destination pathname
            navigate(destinationPath);

            // Reload the page if the final destination is reached
            if (destinationPath === '/final') {
                window.location.reload();
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
        skillOne,
        skillTwo,
        skillThree,
        skillFour,
        skillFive,
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
        degree,
        fieldOfStudy,
        schoolName,
        schoolLocation,
        secondYearStartGraduation,
        secondMonthStartGraduation,
        secondDegree,
        secondFieldOfStudy,
        secondSchoolName,
        secondSchoolLocation,
        summary
    } = formik.values;

    const cvPreviewProps = {
        firstNameInput: firstName,
        lastNameInput: lastName,
        professionInput: profession,
        cityHeadingInput: cityHeading,
        stateHeadingInput: stateHeading,
        countryInput: country,
        zipCodeInput: zipCode,
        phoneInput: phone,
        emailInput: email,
        skillOneInput: skillOne,
        skillTwoInput: skillTwo,
        skillThreeInput: skillThree,
        skillFourInput: skillFour,
        skillFiveInput: skillFive,
        yearStartWorkInput: yearStartWork,
        monthStartWorkInput: monthStartWork,
        yearEndWorkInput: yearEndWork,
        monthEndWorkInput: monthEndWork,
        currentlyWorkingCheckboxValue: currentlyWorkingCheckboxValue,
        jobTitleInput: jobTitle,
        companyInput: company,
        cityWorkInput: cityWork,
        stateWorkInput: stateWork,
        workResponsibilityOneInput: workResponsibilityOne,
        workResponsibilityTwoInput: workResponsibilityTwo,
        workResponsibilityThreeInput: workResponsibilityThree,
        workResponsibilityFourInput: workResponsibilityFour,
        secondYearStartWorkInput: secondYearStartWork,
        secondMonthStartWorkInput: secondMonthStartWork,
        secondYearEndWorkInput: secondYearEndWork,
        secondMonthEndWorkInput: secondMonthEndWork,
        secondCurrentlyWorkingCheckboxValue:
            secondCurrentlyWorkingCheckboxValue,
        secondJobTitleInput: secondJobTitle,
        secondCompanyInput: secondCompany,
        secondCityWorkInput: secondCityWork,
        secondStateWorkInput: secondStateWork,
        secondWorkResponsibilityOneInput: secondWorkResponsibilityOne,
        secondWorkResponsibilityTwoInput: secondWorkResponsibilityTwo,
        secondWorkResponsibilityThreeInput: secondWorkResponsibilityThree,
        secondWorkResponsibilityFourInput: secondWorkResponsibilityFour,
        yearStartGraduationInput: yearStartGraduation,
        monthStartGraduationInput: monthStartGraduation,
        degreeInput: degree,
        fieldOfStudyInput: fieldOfStudy,
        schoolNameInput: schoolName,
        schoolLocationInput: schoolLocation,
        secondYearStartGraduationInput: secondYearStartGraduation,
        secondMonthStartGraduationInput: secondMonthStartGraduation,
        secondDegreeInput: secondDegree,
        secondFieldOfStudyInput: secondFieldOfStudy,
        secondSchoolNameInput: secondSchoolName,
        secondSchoolLocationInput: secondSchoolLocation,
        summaryInput: summary
    };

    // Destructure formik props
    const {
        values,
        handleSubmit,
        handleChange,
        errors,
        touched,
        setFieldValue
    } = formik;

    const renderRoute = (path, component) => (
        <Route path={path} element={component} />
    );

    useEffect(() => {
        const { isOnFinalFormData } =
            JSON.parse(window.localStorage.getItem('isOnFinalFormData')) || {};
        window.localStorage.setItem(
            'isOnFinalFormData',
            JSON.stringify({ isOnFinalFormPath: !!isOnFinalFormData })
        );
    }, [pathname]);

    return (
        <div
            className={`justify-evenly bg-main ${
                pathname !== '/final'
                    ? 'md:flex md:tall:block'
                    : 'flex items-center'
            }`}
        >
            <Routes>
                {renderRoute(
                    paths.heading,
                    <HeadingForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        formikErrors={errors}
                        touched={touched}
                    />
                )}
                {renderRoute(
                    paths.workHistory,
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
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        jobTitleValues={values.jobTitle}
                        formikErrors={errors}
                        touched={touched}
                        companyValues={values.company}
                        setFieldValue={setFieldValue}
                    />
                )}
                {renderRoute(
                    paths.workResponsibility,
                    <WorkResponsibilityForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                    />
                )}
                {renderRoute(
                    paths.workHistorySummary,
                    <WorkHistorySummary handleSubmit={handleSubmit} />
                )}
                {renderRoute(paths.skipWorkHistory, <SkipWorkHistoryModal />)}
                {renderRoute(
                    paths.additionalWorkHistory,
                    <AdditionalWorkHistoryForm
                        secondCurrentlyWorkingCheckboxValue={
                            secondCurrentlyWorkingCheckboxValue
                        }
                        setSecondCurrentlyWorkingCheckboxValue={
                            setSecondCurrentlyWorkingCheckboxValue
                        }
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />
                )}
                {renderRoute(
                    paths.additionalWorkResponsibility,
                    <AdditionalWorkResponsibilityForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                    />
                )}
                {renderRoute(
                    paths.additionalWorkHistorySummary,
                    <AdditionalWorkHistorySummary handleSubmit={handleSubmit} />
                )}
                {renderRoute(
                    paths.education,
                    <EducationForm
                        setSkipEducation={setSkipEducation}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />
                )}
                {renderRoute(
                    paths.educationSummary,
                    <EducationSummary handleSubmit={handleSubmit} />
                )}
                {renderRoute(
                    paths.additionalEducation,
                    <AdditionalEducationForm
                        setSkipEducation={setSkipEducation}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />
                )}
                {renderRoute(
                    paths.additionalEducationSummary,
                    <AdditionalEducationSummary handleSubmit={handleSubmit} />
                )}
                {renderRoute(
                    paths.skills,
                    <SkillsForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                    />
                )}
                {renderRoute(
                    paths.summary,
                    <SummaryForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                    />
                )}
                {renderRoute(
                    paths.final,
                    <Final componentRef={componentRef} />
                )}
            </Routes>
            {pathname !== '/final' && <CVPreview {...cvPreviewProps} />}
        </div>
    );
};

export default FormValidation;
