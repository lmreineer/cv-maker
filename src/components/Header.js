import { useLocation } from 'react-router-dom';
import headerLogo from '../assets/headerLogo.svg';

import { useState, useLayoutEffect } from 'react';

import ReactToPrint from 'react-to-print';

export default function Header({ componentRef }) {
    const { pathname } = useLocation();

    const isOn = (path) => pathname === path;

    // Default to A4 height in millimeters
    const [pageHeight, setPageHeight] = useState(297);

    useLayoutEffect(() => {
        // Calculate the dimensions after the component has been rendered
        if (componentRef.current) {
            const contentHeight = componentRef.current.offsetHeight;
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
            {!isOn('/final') ? (
                <div className="w-full rounded-lg text-center sm:flex sm:w-max">
                    <div
                        className={`m-2 p-4 ${
                            isOn('/')
                                ? 'rounded-xl bg-yellow-green text-very-dark-yellow-green'
                                : 'text-gray-400'
                        }`}
                    >
                        Heading
                    </div>
                    <div
                        className={`m-2 p-4 ${
                            isOn('/work-history') ||
                            isOn('/work-responsibility') ||
                            isOn('/work-history-summary') ||
                            isOn('/skip-work-history') ||
                            isOn('/additional-work-history') ||
                            isOn('/additional-work-responsibility') ||
                            isOn('/additional-work-history-summary')
                                ? 'rounded-xl bg-yellow-green text-very-dark-yellow-green'
                                : 'text-gray-400'
                        }`}
                    >
                        Work
                    </div>
                    <div
                        className={`m-2 p-4 ${
                            isOn('/education') ||
                            isOn('/education-summary') ||
                            isOn('/additional-education') ||
                            isOn('/additional-education-summary')
                                ? 'rounded-xl bg-yellow-green text-very-dark-yellow-green'
                                : 'text-gray-400'
                        }`}
                    >
                        Education
                    </div>
                    <div
                        className={`m-2 p-4 ${
                            isOn('/skills')
                                ? 'rounded-xl bg-yellow-green text-very-dark-yellow-green'
                                : 'text-gray-400'
                        }`}
                    >
                        Skills
                    </div>
                    <div
                        className={`m-2 p-4 ${
                            isOn('/summary')
                                ? 'rounded-xl bg-yellow-green text-very-dark-yellow-green'
                                : 'text-gray-400'
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
