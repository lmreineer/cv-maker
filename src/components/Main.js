import { useState } from "react";
import Heading from "./form/HeadingForm.js";
import Control from "./preview/CVPreview.js";

const Main = () => {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const handleFirstNameInput = (e) => {
        setFirstNameInput(e.target.value);
    };

    const handleLastNameInput = (e) => {
        setLastNameInput(e.target.value);
    };

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
    };

    return (
        <div className="flex justify-around px-40">
            <Heading handleFirstNameInput={handleFirstNameInput} handleLastNameInput={handleLastNameInput} handleEmailInput={handleEmailInput} />
            <Control firstNameInput={firstNameInput} lastNameInput={lastNameInput} emailInput={emailInput} />
        </div>
    );
};

export default Main;
