import React, { useRef, useEffect } from 'react';
import autosize from 'autosize';

import { useNavigate } from 'react-router-dom';

const SkillsForm = ({ handleSubmit, handleChange }) => {
    const textareaRef1 = useRef(null);
    const textareaRef2 = useRef(null);
    const textareaRef3 = useRef(null);
    const textareaRef4 = useRef(null);
    const textareaRef5 = useRef(null);

    const formRef = useRef(null);

    useEffect(() => {
        autosize(textareaRef1.current);
        autosize(textareaRef2.current);
        autosize(textareaRef3.current);
        autosize(textareaRef4.current);
        autosize(textareaRef5.current);
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
            className="flex w-1/2 flex-col justify-center"
        >
            <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Skills:
            </h1>
            <div className="flex flex-col justify-center">
                <textarea
                    name="skillOne"
                    placeholder="Skill 1"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef1}
                    maxLength={250}
                />
                <textarea
                    name="skillTwo"
                    placeholder="Skill 2"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef2}
                    maxLength={250}
                />
                <textarea
                    name="skillThree"
                    placeholder="Skill 3"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef3}
                    maxLength={250}
                />
                <textarea
                    name="skillFour"
                    placeholder="Skill 4"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef4}
                    maxLength={250}
                />
                <textarea
                    name="skillFive"
                    placeholder="Skill 5"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnter(e)}
                    ref={textareaRef5}
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

export default SkillsForm;
