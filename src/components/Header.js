import headerLogo from '../assets/headerLogo.svg';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const pathname = useLocation().pathname;
    const isOnHeadingPath = pathname === '/';
    const isOnWorkHistoryPath = pathname === '/work-history';
    const isOnWorkResponbilityForm = pathname === '/work-responsibility';
    const isOnWorkHistorySummary = pathname === '/work-history-summary';
    const isOnSkipWorkHistoryModal = pathname === '/skip-work-history';
    const isOnAdditionalWorkHistoryForm =
        pathname === '/additional-work-history';
    const isOnAdditionalWorkResponsibilityForm =
        pathname === '/additional-work-responsibility';
    const isOnAdditionalWorkHistorySummary =
        pathname === '/additional-work-history-summary';
    const isOnEducationPath = pathname === '/education';
    const isOnEducationSummaryPath = pathname === '/education-summary';
    const isOnSkillsPath = pathname === '/skills';

    const workHistoryIsSubmitted =
        !isOnHeadingPath &&
        !isOnWorkHistoryPath &&
        !isOnWorkResponbilityForm &&
        !isOnWorkHistorySummary &&
        !isOnSkipWorkHistoryModal &&
        !isOnAdditionalWorkHistoryForm &&
        !isOnAdditionalWorkResponsibilityForm &&
        !isOnAdditionalWorkHistorySummary;
    const educationIsSubmitted =
        workHistoryIsSubmitted &&
        !isOnEducationPath &&
        !isOnEducationSummaryPath;
    const skillsIsSubmitted = educationIsSubmitted && !isOnSkillsPath;

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
                        isOnWorkResponbilityForm ||
                        isOnWorkHistorySummary ||
                        isOnSkipWorkHistoryModal ||
                        isOnAdditionalWorkHistoryForm ||
                        isOnAdditionalWorkResponsibilityForm ||
                        isOnAdditionalWorkHistorySummary
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    }
                        ${
                            workHistoryIsSubmitted
                                ? 'text-very-dark-yellow-green'
                                : 'm-2 p-4 text-gray-400'
                        }
                            `}
                >
                    Work
                </div>
                <div
                    className={`${
                        isOnEducationPath || isOnEducationSummaryPath
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    } ${
                        educationIsSubmitted
                            ? 'text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    }`}
                >
                    Education
                </div>
                <div
                    className={`${
                        isOnSkillsPath
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    } ${
                        skillsIsSubmitted
                            ? 'text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    }`}
                >
                    Skills
                </div>
                <div className="m-2 p-4 text-gray-400">Summary</div>
            </div>
        </header>
    );
};

export default Header;
