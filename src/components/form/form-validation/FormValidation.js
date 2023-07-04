import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import HeadingForm from "../HeadingForm";
import WorkHistoryForm from "../WorkHistoryForm";
import CVPreview from "../../preview/CVPreview";

const FormValidation = () => {
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            profession: "",
            country: "",
            city: "",
            state: "",
            zipCode: "",
            phone: "",
            email: "",
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
                .required("Email is required")
                .email("Email is invalid"),
        }),

        onSubmit: () => {
            switch (pathname) {
                case "/":
                    navigate("/work-history");
                    break;
                default:
                    navigate("/work-history");
            }
        },
    });

    const {
        firstName,
        lastName,
        profession,
        country,
        city,
        state,
        zipCode,
        phone,
        email,
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
                            firstNameValues={firstName}
                            lastNameValues={lastName}
                            professionValues={profession}
                            countryValues={country}
                            cityValues={city}
                            stateValues={state}
                            zipCodeValues={zipCode}
                            phoneValues={phone}
                            emailValues={email}
                            handleChange={formik.handleChange}
                            handleSubmit={formik.handleSubmit}
                            formikErrors={formik.errors}
                        />
                    }
                />
                <Route path="/work-history" element={<WorkHistoryForm />} />
            </Routes>

            <CVPreview
                firstNameInput={capitaliseFirstLetter(firstName)}
                lastNameInput={capitaliseFirstLetter(lastName)}
                professionInput={capitalizeFirstLetterOfEachWord(profession)}
                countryInput={capitalizeFirstLetterOfEachWord(country)}
                cityInput={capitalizeFirstLetterOfEachWord(city)}
                stateInput={capitalizeFirstLetterOfEachWord(state)}
                zipCodeInput={zipCode}
                phoneInput={phone}
                emailInput={lowerCaseEachLetter(email)}
            />
        </>
    );
};

export default FormValidation;
