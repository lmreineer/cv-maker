import React, { useRef, useEffect } from 'react';
import autosize from 'autosize';

import { useNavigate } from 'react-router-dom';

const WorkResponsibilitiesForm = ({
    handleSubmit,
    handleChange,
    bulletPointOneValues,
    bulletPointTwoValues,
    bulletPointThreeValues,
    bulletPointFourValues
}) => {
    const textareaRef1 = useRef(null);
    const textareaRef2 = useRef(null);
    const textareaRef3 = useRef(null);
    const textareaRef4 = useRef(null);

    useEffect(() => {
        autosize(textareaRef1.current);
        autosize(textareaRef2.current);
        autosize(textareaRef3.current);
        autosize(textareaRef4.current);
    });

    const navigate = useNavigate();
    const navigateBack = () => navigate('/work-history');

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-1/2 flex-col justify-center"
        >
            <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Work Responsibilities:
            </h1>
            <div className="flex flex-col justify-center">
                <textarea
                    name="bulletPointOne"
                    placeholder="Bullet Point 1"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    value={bulletPointOneValues}
                    ref={textareaRef1}
                    maxLength={250}
                />
                <textarea
                    name="bulletPointTwo"
                    placeholder="Bullet Point 2"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    value={bulletPointTwoValues}
                    ref={textareaRef2}
                    maxLength={250}
                />
                <textarea
                    name="bulletPointThree"
                    placeholder="Bullet Point 3"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    value={bulletPointThreeValues}
                    ref={textareaRef3}
                    maxLength={250}
                />
                <textarea
                    name="bulletPointFour"
                    placeholder="Bullet Point 4"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    value={bulletPointFourValues}
                    ref={textareaRef4}
                    maxLength={250}
                />
            </div>
            <div className="flex justify-around">
                <input
                    type="button"
                    className="my-10 w-56 rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                    onClick={navigateBack}
                    value="Back"
                />
                <input
                    type="submit"
                    id="continue-button"
                    className="my-10 w-56 rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                    value="Continue"
                />
            </div>
        </form>
    );
};

export default WorkResponsibilitiesForm;
