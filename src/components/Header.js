import headerLogo from "../assets/headerLogo.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
    const pathname = useLocation().pathname;

    return (
        <header className="flex justify-around items-center p-5 select-none">
            <img
                src={headerLogo}
                alt="CV Maker"
                className="w-48 pointer-events-none"
            />
            <div className="flex rounded-lg">
                <div
                    className={
                        pathname === "/"
                            ? "m-2 p-4 rounded-xl text-very-dark-yellow-green bg-yellow-green"
                            : "m-2 p-4 text-very-dark-yellow-green"
                    }
                >
                    Heading
                </div>
                <div
                    className={`${pathname === "/work-history"
                            ? "m-2 p-4 rounded-xl text-very-dark-yellow-green bg-yellow-green"
                            : "m-2 p-4 text-gray-400"
                        }
                        ${pathname !== "/work-history" && pathname !== "/"
                            ? "text-very-dark-yellow-green"
                            : "m-2 p-4 text-gray-400"
                        }
                            `}
                >
                    Work History
                </div>
                <div
                    className={
                        pathname === "/education"
                            ? "m-2 p-4 rounded-xl text-very-dark-yellow-green bg-yellow-green"
                            : "m-2 p-4 text-gray-400"
                    }
                >
                    Education
                </div>
                <div className="m-2 p-4 text-gray-400">Skills</div>
                <div className="m-2 p-4 text-gray-400">Summary</div>
            </div>
        </header>
    );
};

export default Header;
