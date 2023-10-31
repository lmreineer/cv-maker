import React, { useRef, useEffect } from 'react';
import autosize from 'autosize';

import { useNavigate } from 'react-router-dom';

const WorkResponsibilityForm = ({ handleSubmit, handleChange }) => {
    const textareaRef1 = useRef(null);
    const textareaRef2 = useRef(null);
    const textareaRef3 = useRef(null);
    const textareaRef4 = useRef(null);

    const formRef = useRef(null);

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
            // prevent the addition of a new line in the text field
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex min-w-[616px] flex-col justify-center"
        >
            <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Let's list your responsibilities
            </h1>
            <div className="flex flex-col justify-center">
                <textarea
                    name="workResponsibilityOne"
                    placeholder="Work Responsibility 1"
                    className="m-3 h-14 resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef1}
                    maxLength={250}
                />
                <textarea
                    name="workResponsibilityTwo"
                    placeholder="Work Responsibility 2"
                    className="m-3 h-14 resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef2}
                    maxLength={250}
                />
                <textarea
                    name="workResponsibilityThree"
                    placeholder="Work Responsibility 3"
                    className="m-3 h-14 resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef3}
                    maxLength={250}
                />
                <textarea
                    name="workResponsibilityFour"
                    placeholder="Work Responsibility 4"
                    className="m-3 h-14 resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
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
                    className="my-10 w-56 rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                    value="Continue"
                />
            </div>
        </form>
    );
};

export default WorkResponsibilityForm;
