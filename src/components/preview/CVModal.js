import Content from "./CVContent";

const Modal = () => {
    return (
        <div className="select-none absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] bg-white p-10 rounded h-5/6 w-6/12 bg-gray-200">
            <Content
                modalContainer="h-full shadow-lg rounded p-10 overflow-auto bg-white"
                fullName="font-bold text-5xl"
            />
        </div>
    );
};

export default Modal;
