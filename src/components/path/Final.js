import CVModal from '../preview/CVModal';

const Final = ({ componentRef }) => {
    return (
        <div>
            <p className="mt-10 text-center font-cabin italic opacity-80 maxsm:hidden">
                When printing, choose the "Save as PDF" option for the
                destination.
            </p>
            <CVModal
                componentRef={componentRef}
                modalSizing="maxsm:invisible maxsm:overflow-hidden border-2 mt-5 m-10 w-[36rem] p-10 md:short:min-h-[43.4rem]"
            />
        </div>
    );
};

export default Final;
