import { useState } from "react";
import Modal from "./CVModal.js";
import Content from "./CVContent.js";

const Preview = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div>
            <div className="shadow-all-sides-light w-[30rem] h-[87%] mt-[4rem] p-10 hover:cursor-pointer select-none" onClick={toggleClick}>
                <Content />
            </div>

            {!isClicked && (
                <div className="modal">
                    <div className="overlay" onClick={toggleClick}></div>
                    <Modal />
                </div>
            )}

        </div>
    );
};

export default Preview;
