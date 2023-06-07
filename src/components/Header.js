import logo from "../logo.svg";

const Header = () => {
    return (
        <header className="flex justify-around items-center p-3 shadow-lg bg-light-yellow">
            <img src={logo} alt="CV Maker" className="w-40 pointer-events-none" />
            <div className="flex">
                <div className="m-5 text-dark-yellow-green underline">1. Heading</div>
                <div className="m-5 opacity-50">2. Skills</div>
                <div className="m-5 opacity-50">3. Summary</div>
                <div className="m-5 opacity-50">4. Work History</div>
                <div className="m-5 opacity-50">5. Education</div>
            </div>
        </header>
    );
};

export default Header;
