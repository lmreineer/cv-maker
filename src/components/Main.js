import { useState } from "react";
import Heading from "./form/HeadingForm.js";
import Control from "./preview/CVPreview.js";

const Main = () => {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [professionInput, setProfessionInput] = useState("");
    const [countryInput, setCountryInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    const [stateProvinceInput, setStateProvinceInput] = useState("");
    const [zipCodeInput, setZipCodeInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

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
        <div className="flex justify-around px-40">
            <Heading
                setFirstNameInput={setFirstNameInput}
                setLastNameInput={setLastNameInput}
                setProfessionInput={setProfessionInput}
                setCountryInput={setCountryInput}
                setCityInput={setCityInput}
                setStateProvinceInput={setStateProvinceInput}
                setZipCodeInput={setZipCodeInput}
                setPhoneInput={setPhoneInput}
                setEmailInput={setEmailInput}
            />
            <Control
                firstNameInput={capitaliseFirstLetter(firstNameInput)}
                lastNameInput={capitaliseFirstLetter(lastNameInput)}
                professionInput={capitaliseFirstLetter(professionInput)}
                countryInput={capitalizeFirstLetterOfEachWord(countryInput)}
                cityInput={capitalizeFirstLetterOfEachWord(cityInput)}
                stateProvinceInput={capitalizeFirstLetterOfEachWord(stateProvinceInput)}
                zipCodeInput={capitalizeFirstLetterOfEachWord(zipCodeInput)}
                phoneInput={capitaliseFirstLetter(phoneInput)}
                emailInput={capitaliseFirstLetter(emailInput)}
            />
        </div>
    );
};

export default Main;
