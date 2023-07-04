const HeadingForm = ({
    firstNameValues,
    lastNameValues,
    professionValues,
    countryValues,
    cityValues,
    stateValues,
    zipCodeValues,
    phoneValues,
    emailValues,
    handleChange,
    handleSubmit,
    formikErrors,
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-cabin tracking-wider text-very-dark-yellow-green">
                    Contact Information:
                </h1>
                <div>
                    <div className="flex">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className={
                                formikErrors.firstName
                                    ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            }
                            value={firstNameValues}
                            onChange={handleChange}
                            maxLength={15}
                        />
                        {formikErrors.firstName && (
                            <p className="ml-4 text-red-800">{formikErrors.firstName}</p>
                        )}
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className={
                                formikErrors.lastName
                                    ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700"
                                    : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            }
                            value={lastNameValues}
                            onChange={handleChange}
                            maxLength={15}
                        />
                        {formikErrors.lastName && (
                            <p className="ml-4 text-red-800">{formikErrors.lastName}</p>
                        )}
                    </div>
                    <div>
                        <label className="flex">
                            <input
                                type="text"
                                name="profession"
                                placeholder="Profession"
                                className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                                value={professionValues}
                                onChange={handleChange}
                                maxLength={40}
                            />
                        </label>
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
                            value={cityValues}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            value={stateValues}
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
                    <div>
                        <label className={formikErrors.phone ? "flex flex-col" : "flex"}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                className={
                                    formikErrors.phone
                                        ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                                }
                                value={phoneValues}
                                onChange={handleChange}
                            />
                            {formikErrors.phone && (
                                <p className="ml-4 text-red-800">{formikErrors.phone}</p>
                            )}
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
                                    formikErrors.email
                                        ? "border-2 border-red-700 rounded-lg m-3 p-4 w-full outline-0 focus:border-red-700"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                                }
                                value={emailValues}
                                onChange={handleChange}
                                maxLength={40}
                                spellCheck="false"
                            />
                            {formikErrors.email && (
                                <p className="ml-4 text-red-800">{formikErrors.email}</p>
                            )}
                        </label>
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
        </>
    );
};

export default HeadingForm;
