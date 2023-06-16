import { useState } from "react";
import Heading from "./form/HeadingForm.js";
import Control from "./preview/CVPreview.js";

const Main = () => {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [professionInput, setProfessionInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const capitaliseFirstLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };

    return (
        <div className="flex justify-around px-40">
            <Heading
                setFirstNameInput={setFirstNameInput}
                setLastNameInput={setLastNameInput}
                setProfessionInput={setProfessionInput}
                setAddressInput={setAddressInput}
                setPhoneInput={setPhoneInput}
                setEmailInput={setEmailInput}
            />
            <Control
                firstNameInput={capitaliseFirstLetter(firstNameInput)}
                lastNameInput={capitaliseFirstLetter(lastNameInput)}
                professionInput={capitaliseFirstLetter(professionInput)}
                addressInput={capitaliseFirstLetter(addressInput)}
                phoneInput={capitaliseFirstLetter(phoneInput)}
                emailInput={capitaliseFirstLetter(emailInput)}
            />
        </div>
    );
};

export default Main;
