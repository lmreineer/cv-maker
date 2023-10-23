import { useRef } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';

const App = () => {
    const componentRef = useRef();

    return (
        <div className="h-screen">
            <Header componentRef={componentRef} />
            <Main componentRef={componentRef} />
        </div>
    );
};

export default App;
