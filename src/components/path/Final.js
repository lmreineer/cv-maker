import CVModal from '../preview/CVModal';

const Final = ({ componentRef }) => {
    return (
        <CVModal
            componentRef={componentRef}
            modalSizing="border-2 m-10 w-[36rem] p-10 md:min-h-[43.4rem] md:tall:min-h-screen"
        />
    );
};

export default Final;
