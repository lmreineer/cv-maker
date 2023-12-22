import { useRef } from 'react';
import Header from './components/Header.js';
import FormValidation from './components/form-validation/FormValidation.js';

const App = () => {
    const componentRef = useRef();

    return (
        <div className="h-screen bg-main">
            <Header componentRef={componentRef} />
            <FormValidation componentRef={componentRef} />
        </div>
    );
};

export default App;
