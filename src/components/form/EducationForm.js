import { useNavigate } from "react-router-dom";

import Select from "react-select";

const EducationForm = () => {
    const navigate = useNavigate();

    const navigateBack = () => navigate("/work-history");

    const options = [
        { value: "Chocolate", label: "Chocolate" },
        { value: "Strawberry", label: "Strawberry" },
        { value: "Vanilla", label: "Vanilla" },
    ];

    const customStyles = {
        control: (base) => ({
            ...base,
            border: "2px solid #E5E7EB",
            boxShadow: "none",
            margin: "0.75rem",
            paddingLeft: "1rem",
            height: "3.75rem",
            borderRadius: "0.5rem",
            "&:hover": {
                border: "2px solid #7B8B5E",
            },
        }),
    };

    return (
        <>
            <form className="flex flex-col justify-center w-1/2">
                <h1 className="text-4xl mb-10 mt-16 font-semibold text-center font-cabin tracking-wider text-very-dark-yellow-green">
                    Education:
                </h1>
                <div className="flex justify-center">
                    <input
                        type="text"
                        name="schoolName"
                        placeholder="School Name"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="schoolLocation"
                        placeholder="School Location"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        maxLength={40}
                    />
                </div>
                <div className="flex justify-center">
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="fieldOfStudy"
                        placeholder="Field of Study"
                        className="border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow-green w-full"
                        maxLength={40}
                    />
                </div>
                <div className="flex justify-center">
                    <Select
                        name="graduationStart"
                        placeholder="Graduation Start Year"
                        options={options}
                        styles={customStyles}
                    />
                    <Select
                        name="graduation"
                        placeholder="Graduation Start Month"
                        options={options}
                        styles={customStyles}
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
            </form>
        </>
    );
};

export default EducationForm;
