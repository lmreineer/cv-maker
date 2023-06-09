import React, { useState } from "react";

const Heading = () => {
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

    return (
        <form disabled={disabled} onSubmit={preventRedirect}>
            <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-josefin-sans">
                Contact Information:
            </h1>
            <div>
                <div className="flex">
                    <label>
                        <input
                            type="text"
                            name="first-name"
                            placeholder="First name"
                            className={
                                errors.firstName
                                    ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                            }
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                errors.firstName = false;
                            }}
                        />
                        {errors.firstName && (
                            <p className="ml-4 text-red-800">{errors.firstName}</p>
                        )}
                    </label>
                    <label>
                        <input
                            type="text"
                            name="last-name"
                            placeholder="Last name"
                            className={
                                errors.lastName
                                    ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                            }
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                errors.lastName = false;
                            }}
                        />
                        {errors.lastName && (
                            <p className="ml-4 text-red-800">{errors.lastName}</p>
                        )}
                    </label>
                </div>
                <div>
                    <label className="flex">
                        <input
                            type="text"
                            name="profession"
                            placeholder="Profession"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md w-full"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="text"
                            name="state-province"
                            placeholder="State / Province"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                        />
                    </label>
                    <label>
                        <input
                            type="tel"
                            name="zip-code"
                            placeholder="ZIP Code"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                        />
                    </label>
                </div>
                <div>
                    <label className="flex">
                        <input
                            type="tel"
                            name="phone-number"
                            placeholder="Phone"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md w-full"
                        />
                    </label>
                </div>
                <div>
                    <label className="flex">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            id="email"
                            className={
                                errors.email
                                    ? "border-2 border-red-700 rounded-lg m-3 p-4 w-full outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md w-full"
                            }
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                errors.email = false;
                            }}
                        />
                    </label>
                    {errors.email && <p className="ml-4 text-red-800">{errors.email}</p>}
                </div>
                <div className="flex justify-around">
                    <button className="bg-gray-300 hover:bg-gray-400 transition p-5 w-56 rounded-lg my-10">
                        Back
                    </button>
                    <input
                        type="submit"
                        id="continue-button"
                        className="bg-yellow-green hover:bg-dark-yellow-green hover:cursor-pointer transition p-5 w-56 rounded-lg my-10"
                        value="Continue"
                    />
                </div>
            </div>
        </form>
    );
};

export default Heading;
