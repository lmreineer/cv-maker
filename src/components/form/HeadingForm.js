const HeadingForm = ({
    handleSubmit,
    formikErrors,
    touched,
    firstNameValues,
    handleChange,
    lastNameValues,
    professionValues,
    countryValues,
    cityContactValues,
    stateContactValues,
    zipCodeValues,
    phoneValues,
    emailValues,
}) => {
    return (
        <>
            <form onSubmit={(e) => { handleSubmit(e); console.log("submitted"); }} className="flex flex-col justify-center">
                <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-cabin tracking-wider text-very-dark-yellow-green">
                    Contact Information:
                </h1>
                <div className="flex">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className={
                                formikErrors.firstName && touched.firstName
                                    ? "border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            }
                            value={firstNameValues}
                            onChange={handleChange}
                            maxLength={15}
                        />
                        {formikErrors.firstName && touched.firstName && (
                            <p className="ml-4 text-red-800">{formikErrors.firstName}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className={
                                formikErrors.lastName && touched.lastName
                                    ? "border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            }
                            value={lastNameValues}
                            onChange={handleChange}
                            maxLength={15}
                        />
                        {formikErrors.lastName && touched.lastName && (
                            <p className="ml-4 text-red-800">{formikErrors.lastName}</p>
                        )}
                    </div>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        name="profession"
                        placeholder="Profession"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        value={professionValues}
                        onChange={handleChange}
                        maxLength={40}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                        value={countryValues}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                        value={cityContactValues}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                        value={stateContactValues}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="zipCode"
                        placeholder="ZIP Code"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                        value={zipCodeValues}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        value={phoneValues}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="flex">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            id="email"
                            className={
                                formikErrors.email && touched.email
                                    ? "border-2 border-red-700 rounded-lg m-3 p-4 w-full outline-0 focus:border-red-700"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                            }
                            value={emailValues}
                            onChange={handleChange}
                            maxLength={40}
                            spellCheck="false"
                        />
                    </div>
                    {formikErrors.email && touched.email && (
                        <p className="ml-4 text-red-800">{formikErrors.email}</p>
                    )}
                </div>
                <div className="flex justify-end w-11/12">
                    <input
                        type="submit"
                        className="bg-yellow-green hover:bg-dark-yellow-green hover:cursor-pointer transition p-5 w-56 rounded-lg my-10"
                        value="Continue"
                    />
                </div>
            </form>
        </>
    );
};

export default HeadingForm;
