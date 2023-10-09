import { useEffect, useRef } from 'react';
import autosize from 'autosize';

import { useNavigate } from 'react-router-dom';

const SummaryForm = ({ handleSubmit, handleChange }) => {
    const textareaRef1 = useRef(null);

    const formRef = useRef(null);

    useEffect(() => {
        autosize(textareaRef1.current);
    });

    const navigate = useNavigate();
    const navigateBack = () => navigate('/skills');

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
            className="flex flex-col justify-center"
        >
            <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Summary:
            </h1>
            <textarea
                name="summary"
                placeholder="Summary"
                className="m-3 h-14 w-[616px] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                onChange={handleChange}
                onKeyDown={(e) => handleEnter(e)}
                ref={textareaRef1}
                maxLength={250}
            />
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

export default SummaryForm;
