import { useState } from "react";
import Heading from "./form/HeadingForm.js";
import Control from "./preview/CVPreview.js";

const Main = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    let disabled = false;

    const preventRedirect = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (firstName.trim() === "") {
            validationErrors.firstName = "First name is required";
        }

        if (lastName.trim() === "") {
            validationErrors.lastName = "Last name is required";
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

        // if there are any errors, disable the button
        Object.keys(validationErrors).length > 0
            ? (disabled = true)
            : (disabled = false);

        // Set the validation errors
        setErrors(validationErrors);
    };

    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const handleFirstNameInput = (e) => {
        setFirstNameInput(e.target.value);
        setFirstName(e.target.value);
        errors.firstName = false;
    };

    const handleLastNameInput = (e) => {
        setLastNameInput(e.target.value);
        setLastName(e.target.value);
        errors.lastName = false;
    };

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
        setEmail(e.target.value);
        errors.email = false;
    };

    return (
        <div className="flex justify-around px-40">
            <Heading
                disabled={disabled}
                preventRedirect={preventRedirect}
                errors={errors}
                handleFirstNameInput={handleFirstNameInput}
                handleLastNameInput={handleLastNameInput}
                handleEmailInput={handleEmailInput}
            />
            <Control
                firstNameInput={firstNameInput}
                lastNameInput={lastNameInput}
                emailInput={emailInput}
            />
        </div>
    );
};

export default Main;
