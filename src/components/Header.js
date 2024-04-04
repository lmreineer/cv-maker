import { useLocation } from 'react-router-dom';
import headerLogo from '../assets/headerLogo.svg';

import { useState, useLayoutEffect } from 'react';

import ReactToPrint from 'react-to-print';

export default function Header({ componentRef }) {
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

    const [pageWidth, setPageWidth] = useState(210); // default to A4 width in millimeters
    const [pageHeight, setPageHeight] = useState(297); // default to A4 height in millimeters

    useLayoutEffect(() => {
        // calculate the dimensions after the component has been rendered
        if (componentRef.current) {
            const contentWidth = componentRef.current.offsetWidth;
            const contentHeight = componentRef.current.offsetHeight;
            setPageWidth(contentWidth / 3.779527559); // convert pixels to millimeters
            setPageHeight(contentHeight / 3.779527559); // convert pixels to millimeters
        }
    }, [componentRef]);

    const pageStyle = `
      @page {
        size: 150mm ${pageHeight < 297 ? '297' : pageHeight}mm;
      }
      
      @media print {
        body {
          width: 150mm;
          height: ${pageHeight < 297 ? '297' : pageHeight}mm;
        }
      }
    `;

    return (
        <header className="flex w-full select-none flex-col items-center justify-around bg-white p-4 md:flex-row">
            <div className="m-5">
                <img
                    src={headerLogo}
                    alt="CV Maker"
                    className="pointer-events-none w-[11.5rem]"
                />
            </div>
            {!summaryIsSubmitted ? (
                <div className="w-full rounded-lg text-center sm:flex sm:w-max">
                    <div
                        className={
                            isOnHeadingForm
                                ? 'm-2 rounded-xl bg-yellow-green p-4 text-very-dark-yellow-green'
                                : 'm-2 p-4 text-very-dark-yellow-green sm:flex sm:flex-wrap sm:content-center'
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
                        } ${
                            workHistoryIsSubmitted
                                ? 'text-very-dark-yellow-green'
                                : 'm-2 p-4 text-gray-400'
                        }`}
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
            ) : (
                <div className="flex w-fit flex-col justify-center">
                    <p className="mb-5 text-center font-cabin italic opacity-80 sm:hidden">
                        When printing, choose the "Save as PDF" option for the
                        destination.
                    </p>
                    <ReactToPrint
                        trigger={() => (
                            <button className="rounded-lg bg-yellow-green p-6 transition hover:cursor-pointer hover:bg-dark-yellow-green sm:w-56">
                                Keep a copy
                            </button>
                        )}
                        content={() => componentRef.current}
                        pageStyle={pageStyle}
                        documentTitle="resume"
                    />
                </div>
            )}
        </header>
    );
}
