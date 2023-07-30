import headerLogo from '../assets/headerLogo.svg';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const pathname = useLocation().pathname;

    return (
        <header className="flex select-none items-center justify-around p-5">
            <img
                src={headerLogo}
                alt="CV Maker"
                className="pointer-events-none w-48"
            />
            <div className="flex rounded-lg">
                <div
                    className={
                        pathname === '/'
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-very-dark-yellow-green'
                    }
                >
                    Heading
                </div>
                <div
                    className={`${
                        pathname === '/work-history' ||
                        pathname === '/work-responsibilities' ||
                        pathname === '/skip-work-history'
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    }
                        ${
                            pathname !== '/work-history' && pathname !== '/'
                                ? 'text-very-dark-yellow-green'
                                : 'm-2 p-4 text-gray-400'
                        }
                            `}
                >
                    Work History
                </div>
                <div
                    className={
                        pathname === '/education'
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
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
