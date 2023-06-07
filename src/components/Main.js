import Heading from "./form/HeadingForm.js";
import Preview from "./preview/CVPreview.js";

const Main = () => {
    return (
        <div className="flex justify-around px-40">
            <Heading />
            <Preview />
        </div>
    );
};

export default Main;
