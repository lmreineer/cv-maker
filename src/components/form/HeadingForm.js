const HeadingForm = ({
    firstNameValues,
    lastNameValues,
    professionValues,
    countryValues,
    cityValues,
    stateProvinceValues,
    zipCodeValues,
    phoneValues,
    emailValues,
    handleChange,
    handleSubmit,
    formikErrors,
    formikTouched,
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-josefin-sans">
                    Contact Information:
                </h1>
                <div>
                    <div className="flex">
                        <label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                className={
                                    formikErrors.firstName
                                        ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                                }
                                value={firstNameValues}
                                onChange={handleChange}
                                maxLength={15}
                            />
                            {formikErrors.firstName && (
                                <p className="ml-4 text-red-800">{formikErrors.firstName}</p>
                            )}
                        </label>
                        <label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                className={
                                    formikErrors.lastName
                                        ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                                }
                                value={lastNameValues}
                                onChange={handleChange}
                                maxLength={15}
                            />
                            {formikErrors.lastName && (
                                <p className="ml-4 text-red-800">{formikErrors.lastName}</p>
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
                                value={professionValues}
                                onChange={handleChange}
                                maxLength={40}
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
                                value={countryValues}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                                value={cityValues}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="text"
                                name="stateProvince"
                                placeholder="State / Province"
                                className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                                value={stateProvinceValues}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                type="tel"
                                name="zipCode"
                                placeholder="ZIP Code"
                                className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                                value={zipCodeValues}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label className={formikErrors.phone ? "flex flex-col" : "flex"}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                className={
                                    formikErrors.phone
                                        ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md w-full"
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
                                        ? "border-2 border-red-700 rounded-lg m-3 p-4 w-full outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md w-full"
                                }
                                value={emailValues}
                                onChange={handleChange}
                                maxLength={40}
                            />
                        </label>
                        {formikErrors.email && (
                            <p className="ml-4 text-red-800">{formikErrors.email}</p>
                        )}
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
