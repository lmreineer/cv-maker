import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Header from "../../Header";
import HeadingForm from "../HeadingForm";
import SkillsForm from "../SkillsForm";
import CVPreview from "../../preview/CVPreview";

const FormValidation = () => {
    const pathname = { useLocation };
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            profession: "",
            country: "",
            city: "",
            stateProvince: "",
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
                    navigate("/skills");
                    break;
                default:
                    navigate("/skills");
            }
        },
    });

    const {
        firstName,
        lastName,
        profession,
        country,
        city,
        stateProvince,
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

    return (
        <>
            <Header />
            <div className="flex justify-around px-40">
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
                                stateProvinceValues={stateProvince}
                                zipCodeValues={zipCode}
                                phoneValues={phone}
                                emailValues={email}
                                handleChange={formik.handleChange}
                                handleSubmit={formik.handleSubmit}
                                formikErrors={formik.errors}
                                formikTouched={formik.touched}
                            />
                        }
                    />
                    <Route path="/skills" element={<SkillsForm />} />
                </Routes>

                <CVPreview
                    firstNameInput={capitaliseFirstLetter(firstName)}
                    lastNameInput={capitaliseFirstLetter(lastName)}
                    professionInput={capitalizeFirstLetterOfEachWord(profession)}
                    countryInput={capitalizeFirstLetterOfEachWord(country)}
                    cityInput={capitalizeFirstLetterOfEachWord(city)}
                    stateProvinceInput={capitalizeFirstLetterOfEachWord(stateProvince)}
                    zipCodeInput={zipCode}
                    phoneInput={phone}
                    emailInput={email}
                />
            </div>
        </>
    );
};

export default FormValidation;
