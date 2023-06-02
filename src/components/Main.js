import Heading from './form/HeadingForm.js';
import Preview from './preview/CVPreview.js';

const Main = () => {
    return (
        <div className='flex justify-around'>
            <Heading />
            <Preview />
        </div>
    );
};

export default Main;
