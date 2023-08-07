import headerLogo from '../assets/headerLogo.svg';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';
    const isOnWorkResponsibilities = pathname === '/work-responsibilities';
    const isOnWorkHistoryList = pathname === '/work-history-list';
    const isOnSkipWorkHistoryModal = pathname === '/skip-work-history';
    const isOnEducationPath = pathname === '/education';

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
                        isOnHeadingPath
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-very-dark-yellow-green'
                    }
                >
                    Heading
                </div>
                <div
                    className={`${
                        isOnWorkHistoryPath ||
                        isOnWorkResponsibilities ||
                        isOnWorkHistoryList ||
                        isOnSkipWorkHistoryModal
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    }
                        ${
                            !isOnWorkHistoryPath && !isOnHeadingPath
                                ? 'text-very-dark-yellow-green'
                                : 'm-2 p-4 text-gray-400'
                        }
                            `}
                >
                    Work History
                </div>
                <div
                    className={
                        isOnEducationPath
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
