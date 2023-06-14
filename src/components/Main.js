import { useState } from "react";
import Heading from "./form/HeadingForm.js";
import Control from "./preview/CVPreview.js";

const Main = () => {
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState({});
    const [firstNameInput, setFirstNameInput] = useState("");

    const handleInputChange = (e) => {
        setFirstNameInput(e.target.value);

        setLastName(e.target.value);
        errors.lastName = false;
    };

    return (
        <div className="flex justify-around px-40">
            <Heading onInputChange={handleInputChange} />
            <Control firstNameInput={firstNameInput} />
        </div>
    );
};

export default Main;
