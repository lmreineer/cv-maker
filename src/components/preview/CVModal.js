import CVContent from './CVContent';

const CVModal = ({
    firstNameInput,
    lastNameInput,
    professionInput,
    countryInput,
    cityInput,
    stateProvinceInput,
    zipCodeInput,
    phoneInput,
    emailInput,
}) => {
    return (
        <div className="absolute left-2/4 top-2/4 h-5/6 w-7/12 translate-x-[-50%] translate-y-[-50%] select-none break-all rounded bg-zinc-200 p-10">
            <CVContent
                textContainer="h-full rounded p-10 overflow-auto bg-white"
                fullName="font-bold text-5xl"
                firstNameInput={firstNameInput}
                lastNameInput={lastNameInput}
                profession="text-2xl"
                professionInput={professionInput}
                address="mt-5 text-lg font-medium"
                contactHeading="text-lg font-medium"
                contactInput="font-normal ml-1"
                countryInput={countryInput}
                cityInput={cityInput}
                stateProvinceInput={stateProvinceInput}
                zipCodeInput={zipCodeInput}
                phoneInput={phoneInput}
                emailInput={emailInput}
                summaryContainer="mt-10"
                mainBackgroundHeading="font-bold italic border-b-2 text-xl mt-10"
                summary="text-xl mt-5"
                mainBackgroundContainer="mt-5"
                skillsList="list-disc ml-14 mt-2 text-lg"
                stayPeriodContainer="flex mt-5"
                workTimePeriodContainer="text-lg w-96"
                stayDetailContainer="ml-32 text-lg"
                stayDetailHeading="text-xl"
                institution="mt-1 italic font-light"
                workDescriptionContainer="list-disc ml-5 mt-2"
                workDescriptionList="font-light"
                educationTimePeriodContainer="text-lg"
            />
        </div>
    );
};

export default CVModal;
