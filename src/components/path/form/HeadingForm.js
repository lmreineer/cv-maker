const HeadingForm = ({ handleSubmit, handleChange, formikErrors, touched }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="m-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Your contact details
            </h1>
            <div className="flex">
                <div className="w-full">
                    <div className="flex">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange}
                            className={
                                formikErrors.firstName && touched.firstName
                                    ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                    : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                            }
                            maxLength={15}
                        />
                    </div>
                    {formikErrors.firstName && touched.firstName && (
                        <p className="ml-4 text-red-800">
                            {formikErrors.firstName}
                        </p>
                    )}
                </div>
                <div className="w-full">
                    <div className="flex">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleChange}
                            className={
                                formikErrors.lastName && touched.lastName
                                    ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                    : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                            }
                            maxLength={15}
                        />
                    </div>
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
                    maxLength={40}
                />
            </div>
            <div className="flex">
                <input
                    type="text"
                    name="cityHeading"
                    placeholder="City"
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    maxLength={40}
                />
                <input
                    type="text"
                    name="stateHeading"
                    placeholder="State"
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    maxLength={40}
                />
            </div>
            <div className="flex">
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    maxLength={40}
                />
                <input
                    type="tel"
                    name="zipCode"
                    placeholder="ZIP Code"
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    maxLength={40}
                />
            </div>
            <div className="flex justify-center">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    maxLength={40}
                />
            </div>
            <div>
                <div className="flex justify-center">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        id="email"
                        onChange={handleChange}
                        className={
                            formikErrors.email && touched.email
                                ? 'm-3 w-full rounded-lg border-2 border-red-700 p-4 outline-0 focus:border-red-700'
                                : 'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                        }
                        maxLength={40}
                    />
                </div>
                {formikErrors.email && touched.email && (
                    <p className="ml-4 text-red-800">{formikErrors.email}</p>
                )}
            </div>
            <div className="flex justify-around">
                <input
                    type="button"
                    className="m-3 my-10 w-full rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                    value="Back"
                />
                <input
                    type="submit"
                    className="m-3 my-10 w-full rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                    value="Continue"
                />
            </div>
        </form>
    );
};

export default HeadingForm;
