import Heading from "./form/HeadingForm.js";
import Control from "./preview/CVPreview.js";

const Main = () => {
    return (
        <div className="flex justify-around px-40">
            <Heading />
            <Control />
        </div>
    );
};

export default Main;
