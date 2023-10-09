import headerLogo from '../assets/headerLogo.svg';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const pathname = useLocation().pathname;
    const isOnHeadingForm = pathname === '/';
    const isOnWorkHistoryForm = pathname === '/work-history';
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
    const isOnEducationSummary = pathname === '/education-summary';
    const isOnAdditionalEducationForm = pathname === '/additional-education';
    const isOnAdditionalEducationSummary =
        pathname === '/additional-education-summary';
    const isOnSkillsPath = pathname === '/skills';
    const isOnSummaryPath = pathname === '/summary';

    const workHistoryIsSubmitted =
        !isOnHeadingForm &&
        !isOnWorkHistoryForm &&
        !isOnWorkResponbilityForm &&
        !isOnWorkHistorySummary &&
        !isOnSkipWorkHistoryModal &&
        !isOnAdditionalWorkHistoryForm &&
        !isOnAdditionalWorkResponsibilityForm &&
        !isOnAdditionalWorkHistorySummary;
    const educationIsSubmitted =
        workHistoryIsSubmitted &&
        !isOnEducationPath &&
        !isOnEducationSummary &&
        !isOnAdditionalEducationForm &&
        !isOnAdditionalEducationSummary;
    const skillsIsSubmitted = educationIsSubmitted && !isOnSkillsPath;
    const summaryIsSubmitted = skillsIsSubmitted && !isOnSummaryPath;

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
                        isOnHeadingForm
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-very-dark-yellow-green'
                    }
                >
                    Heading
                </div>
                <div
                    className={`${
                        isOnWorkHistoryForm ||
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
                        isOnEducationPath ||
                        isOnEducationSummary ||
                        isOnAdditionalEducationSummary
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
                <div
                    className={`${
                        isOnSummaryPath
                            ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    } ${
                        summaryIsSubmitted
                            ? 'text-very-dark-yellow-green'
                            : 'm-2 p-4 text-gray-400'
                    }`}
                >
                    Summary
                </div>
            </div>
        </header>
    );
};

export default Header;
