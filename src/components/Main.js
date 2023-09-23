import { useState } from 'react';

import FormValidation from './form-validation/FormValidation';
import CVModal from './preview/CVModal';

const Main = () => {
    const [isOnFinal, setIsOnFinal] = useState(false);

    return (
        <div className="flex justify-around bg-main px-40">
            {isOnFinal ? (
                <CVModal />
            ) : (
                <FormValidation setIsOnFinal={setIsOnFinal} />
            )}
        </div>
    );
};

export default Main;
