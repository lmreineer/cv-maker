import { useRef } from 'react';
import Header from './components/Header.js';
import FormValidation from './components/form-validation/FormValidation.js';

const App = () => {
    const componentRef = useRef();

    return (
        <>
            <Header componentRef={componentRef} />
            <FormValidation componentRef={componentRef} />
        </>
    );
};

export default App;
