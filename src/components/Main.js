import FormValidation from './form-validation/FormValidation';

const Main = ({ componentRef }) => {
    return (
        <div className="h-min-[794px] flex justify-around bg-main px-40">
            <FormValidation componentRef={componentRef} />
        </div>
    );
};

export default Main;
