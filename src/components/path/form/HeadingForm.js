const HeadingForm = ({
    handleSubmit,
    handleChange,
    firstNameValues,
    formikErrors,
    touched,
    lastNameValues,
    professionValues,
    countryValues,
    cityHeadingValues,
    stateHeadingValues,
    zipCodeValues,
    phoneValues,
    emailValues
}) => {
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center"
            >
                <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                    Contact Information:
                </h1>
                <div className="flex">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange}
                            value={firstNameValues}
                            className={
                                formikErrors.firstName && touched.firstName
                                    ? 'm-3 rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                    : 'm-3 rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                            }
                            maxLength={15}
                        />
                        {formikErrors.firstName && touched.firstName && (
                            <p className="ml-4 text-red-800">
                                {formikErrors.firstName}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleChange}
                            value={lastNameValues}
                            className={
                                formikErrors.lastName && touched.lastName
                                    ? 'm-3 rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                    : 'm-3 rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                            }
                            maxLength={15}
                        />
                        {formikErrors.lastName && touched.lastName && (
                            <p className="ml-4 text-red-800">
                                {formikErrors.lastName}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        name="profession"
                        placeholder="Profession"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        value={professionValues}
                        maxLength={40}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="m-3 rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        value={countryValues}
                        autoComplete="on"
                    />
                    <input
                        type="text"
                        name="cityHeading"
                        placeholder="City"
                        className="m-3 rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        value={cityHeadingValues}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="stateHeading"
                        placeholder="State"
                        className="m-3 rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        value={stateHeadingValues}
                    />
                    <input
                        type="tel"
                        name="zipCode"
                        placeholder="ZIP Code"
                        className="m-3 rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        value={zipCodeValues}
                    />
                </div>
                <div className="flex">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={handleChange}
                        value={phoneValues}
                        autoComplete="on"
                    />
                </div>
                <div>
                    <div className="flex">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            id="email"
                            onChange={handleChange}
                            value={emailValues}
                            className={
                                formikErrors.email && touched.email
                                    ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                    : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                            }
                            maxLength={40}
                            autoComplete="on"
                        />
                    </div>
                    {formikErrors.email && touched.email && (
                        <p className="ml-4 text-red-800">
                            {formikErrors.email}
                        </p>
                    )}
                </div>
                <div className="flex w-11/12 justify-end">
                    <input
                        type="submit"
                        className="my-10 w-56 rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                        value="Continue"
                    />
                </div>
            </form>
        </>
    );
};

export default HeadingForm;
