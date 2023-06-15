const Heading = ({
    disabled,
    validateInputs,
    errors,
    inputFirstName,
    inputLastName,
    inputProfession,
    inputAddress,
    inputPhone,
    inputEmail,
}) => {
    return (
        <>
            <form disabled={disabled} onSubmit={validateInputs}>
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
                                id="first-name"
                                className={
                                    errors.firstName
                                        ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md"
                                }
                                onChange={inputFirstName}
                                maxLength={15}
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
                                onChange={inputLastName}
                                maxLength={15}
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
                                onChange={inputProfession}
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
                        <label className={errors.phone ? "flex flex-col" : "flex"}>
                            <input
                                type="tel"
                                name="phone-number"
                                placeholder="Phone"
                                className={
                                    errors.phone
                                        ? " border-2 border-red-700 rounded-lg m-3 p-4 outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md w-full"
                                }
                                onChange={inputPhone}
                            />
                            {errors.phone && (
                                <p className="ml-4 text-red-800">{errors.phone}</p>
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
                                    errors.email
                                        ? "border-2 border-red-700 rounded-lg m-3 p-4 w-full outline-0 focus:border-red-700 focus:shadow-inner focus:shadow-md"
                                        : "border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green focus:shadow-inner focus:shadow-md w-full"
                                }
                                onChange={inputEmail}
                                maxLength={40}
                            />
                        </label>
                        {errors.email && (
                            <p className="ml-4 text-red-800">{errors.email}</p>
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

export default Heading;
