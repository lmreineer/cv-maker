import { useNavigate } from "react-router-dom";

import { DropdownList } from "react-widgets";

const WorkHistoryForm = () => {
    const navigate = useNavigate();
    const navigateBack = () => navigate("/");

    return (
        <>
            <form className="flex flex-col justify-center">
                <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-cabin tracking-wider text-very-dark-yellow-green">
                    Work History:
                </h1>
                <div>
                    <div className="flex">
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            maxLength={40}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            maxLength={40}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            maxLength={40}
                        />
                        <input
                            type="text"
                            name="state"
                            placeholder="State / Country"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            maxLength={40}
                        />
                    </div>
                    <div className="flex justify-center">
                        <DropdownList
                            defaultValue="Yellow"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            data={[
                                "Red",
                                "Yellow",
                                "Blue",
                                "Orange"
                            ]}
                        />
                        <input
                            type="text"
                            name="state"
                            placeholder="End Date"
                            className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green"
                            maxLength={40}
                        />
                    </div>
                    <div className="flex justify-around">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 transition p-5 w-56 rounded-lg my-10"
                            onClick={navigateBack}
                        >
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

export default WorkHistoryForm;
