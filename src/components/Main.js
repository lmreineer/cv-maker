import FormValidation from './form-validation/FormValidation';

const Main = ({ componentRef }) => {
    return (
        <div className="flex flex-col justify-center bg-main px-0 sm:w-max sm:flex-row sm:justify-around sm:px-40">
            <FormValidation componentRef={componentRef} />
        </div>
    );
};

export default Main;
