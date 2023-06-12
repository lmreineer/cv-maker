import Content from "./CVContent";

const Modal = () => {
    return (
        <div className="select-none absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] bg-white p-10 rounded h-5/6 w-7/12 bg-zinc-200">
            <Content
                textContainer="h-full shadow-lg rounded p-10 overflow-auto bg-white"
                fullName="font-bold text-5xl"
                profession="text-2xl"
                address="mt-5 text-lg font-medium"
                contactHeading="text-lg font-medium"
                contactInput="font-normal ml-1"
                summaryContainer="mt-10"
                summaryHeading="font-bold italic text-xl mt-10"
                summary="text-xl mt-5"
                mainBackgroundContainer="mt-5"
                mainBackgroundHeading="font-bold italic border-b-2 text-xl mt-10"
                skillsList="list-disc ml-14 mt-2 text-lg"
                stayPeriodContainer="flex mt-5"
                workTimePeriodContainer="text-lg w-36"
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

export default Modal;
