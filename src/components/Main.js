import { useState } from "react";
import Heading from "./form/HeadingForm.js";
import Control from "./preview/CVPreview.js";

const Main = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    let disabled = false;

    const validateInputs = (e) => {
        e.preventDefault();

        const validationErrors = {};

        const letters = /[a-zA-Z]/;

        if (firstName.trim() === "") {
            validationErrors.firstName = "First name is required";
        } else if (!letters.test(firstName)) {
            validationErrors.firstName = "First name is invalid";
        }

        if (lastName.trim() === "") {
            validationErrors.lastName = "Last name is required";
        } else if (!letters.test(lastName)) {
            validationErrors.lastName = "Last name is invalid";
        }

        const validEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        validEmail.test(String(email).toLowerCase());

        const beforeAtSign = email.substring(0, email.lastIndexOf("@"));

        if (email === "") {
            validationErrors.email = "Email is required";
        } else if (!validEmail.test(email) || !beforeAtSign) {
            validationErrors.email = "Email is invalid";
        }

        if (letters.test(phone)) {
            validationErrors.phone = "Phone is invalid";
        }

        // if there are any errors, disable the button
        Object.keys(validationErrors).length > 0
            ? (disabled = true)
            : (disabled = false);

        // Set the validation errors
        setErrors(validationErrors);
    };

    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [professionInput, setProfessionInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
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

    const inputAddress = (e) => {
        setAddressInput(e.target.value);
    };
    const inputPhone = (e) => {
        setPhoneInput(e.target.value);
        setPhone(e.target.value);
    };

    const inputEmail = (e) => {
        setEmailInput(e.target.value);
        setEmail(e.target.value);
        errors.email = false;
    };

    const capitaliseFirstLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };

    return (
        <div className="flex justify-around px-40">
            <Heading
                disabled={disabled}
                validateInputs={validateInputs}
                errors={errors}
                inputFirstName={inputFirstName}
                inputLastName={inputLastName}
                inputAddress={inputAddress}
                inputPhone={inputPhone}
                inputProfession={inputProfession}
                inputEmail={inputEmail}
            />
            <Control
                firstNameInput={capitaliseFirstLetter(firstNameInput)}
                lastNameInput={capitaliseFirstLetter(lastNameInput)}
                professionInput={capitaliseFirstLetter(professionInput)}
                addressInput={capitaliseFirstLetter(addressInput)}
                phoneInput={phoneInput}
                emailInput={emailInput}
            />
        </div>
    );
};

export default Main;
