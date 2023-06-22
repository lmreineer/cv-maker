import { useState } from "react";
import HeadingForm from "../HeadingForm";
import SkillsForm from "../SkillsForm";
import CVPreview from "../../preview/CVPreview";

const FormValidation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [disabled, setDisabled] = useState(true);

    const validateInput = (e) => {
        e.preventDefault();

        const validationErrors = {};

        const letters = /[a-zA-Z]/;

        if (firstName.trim() === "") {
            validationErrors.firstName = "First name is required";
        } else if (letters.test(firstName) === false) {
            validationErrors.firstName = "First name is invalid";
        }

        if (lastName.trim() === "") {
            validationErrors.lastName = "Last name is required";
        } else if (letters.test(lastName) === false) {
            validationErrors.lastName = "Last name is invalid";
        }

        const validEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        validEmail.test(String(email).toLowerCase());
        const beforeAtSign = email.substring(0, email.lastIndexOf("@"));

        if (email === "") {
            validationErrors.email = "Email is required";
        } else if (validEmail.test(email) === false || beforeAtSign === false) {
            validationErrors.email = "Email is invalid";
        }

        if (letters.test(phone)) {
            validationErrors.phone = "Phone is invalid";
        }

        // if there are any errors, disable the button
        Object.keys(validationErrors).length > 0
            ? setDisabled(true)
            : setDisabled(false);

        // Set the validation errors
        setErrors(validationErrors);
    };

    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [professionInput, setProfessionInput] = useState("");
    const [countryInput, setCountryInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    const [stateProvinceInput, setStateProvinceInput] = useState("");
    const [zipCodeInput, setZipCodeInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const inputFirstName = (e) => {
        setFirstNameInput(e.target.value);
        setFirstName(e.target.value);
        errors.firstName = false;
    };

    const inputLastName = (e) => {
        setLastNameInput(e.target.value);
        setLastName(e.target.value);
        errors.lastName = false;
    };

    const inputProfession = (e) => {
        setProfessionInput(e.target.value);
    };

    const inputCountry = (e) => {
        setCountryInput(e.target.value);
    };

    const inputCity = (e) => {
        setCityInput(e.target.value);
    };

    const inputStateProvince = (e) => {
        setStateProvinceInput(e.target.value);
    };

    const inputZipCode = (e) => {
        setZipCodeInput(e.target.value);
    };

    const inputPhone = (e) => {
        setPhoneInput(e.target.value);
        setPhone(e.target.value);
        errors.phone = false;
    };

    const inputEmail = (e) => {
        setEmailInput(e.target.value);
        setEmail(e.target.value);
        errors.email = false;
    };

    const conditionalComponent = disabled ? (
        <HeadingForm
            disabled={disabled}
            validateInput={validateInput}
            errors={errors}
            inputFirstName={inputFirstName}
            inputLastName={inputLastName}
            inputProfession={inputProfession}
            inputCountry={inputCountry}
            inputCity={inputCity}
            inputStateProvince={inputStateProvince}
            inputZipCode={inputZipCode}
            inputPhone={inputPhone}
            inputEmail={inputEmail}
        />
    ) : (
        <SkillsForm />
    );

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
            {conditionalComponent}
            <CVPreview
                firstNameInput={capitaliseFirstLetter(firstNameInput)}
                lastNameInput={capitaliseFirstLetter(lastNameInput)}
                professionInput={capitaliseFirstLetter(professionInput)}
                countryInput={capitalizeFirstLetterOfEachWord(countryInput)}
                cityInput={capitalizeFirstLetterOfEachWord(cityInput)}
                stateProvinceInput={capitalizeFirstLetterOfEachWord(stateProvinceInput)}
                zipCodeInput={capitalizeFirstLetterOfEachWord(zipCodeInput)}
                phoneInput={capitaliseFirstLetter(phoneInput)}
                emailInput={emailInput}
            />
        </>
    );
};

export default FormValidation;
