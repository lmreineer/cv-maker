import CVModal from '../preview/CVModal';

const Final = ({ componentRef }) => {
    return (
        <CVModal
            componentRef={componentRef}
            modalSizing="border-2 m-10 w-[36rem] p-10 h-screen md:min-h-[43.4rem] md:tall:min-h-screen"
            contentStyle="h-full"
        />
    );
};

export default Final;
