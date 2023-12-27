import CVModal from '../preview/CVModal';

const Final = ({ componentRef }) => {
    return (
        <CVModal
            componentRef={componentRef}
            modalSizing="border-2 m-10 w-[36rem] p-10 md:short:min-h-[43.4rem]"
        />
    );
};

export default Final;
