import logo from "../logo.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
    const pathname = useLocation().pathname;

    return (
        <header className="flex justify-around items-center p-5">
            <img src={logo} alt="CV Maker" className="w-48 pointer-events-none" />
            <div className="flex rounded-lg">
                <div
                    className={
                        pathname === "/"
                            ? "m-2 p-3 rounded-xl text-[#171F1A] bg-yellow-green"
                            : "m-2 p-3 text-gray-400"
                    }
                >
                    Heading
                </div>
                <div
                    className={
                        pathname === "/skills"
                            ? "m-2 text-dark-yellow-green border-b-2 border-dark-yellow-green"
                            : "m-2 p-3 text-gray-400"
                    }
                >
                    Skills
                </div>
                <div className="m-2 p-3 text-gray-400">Summary</div>
                <div className="m-2 p-3 text-gray-400">Work History</div>
                <div className="m-2 p-3 text-gray-400">Education</div>
            </div>
        </header>
    );
};

export default Header;
