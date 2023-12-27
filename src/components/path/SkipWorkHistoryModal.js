import { useNavigate } from 'react-router-dom';

const SkipWorkHistoryModal = () => {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/work-history');
    };
    const navigateForward = () => {
        navigate('/education');
    };

    return (
        <div className="m-10 mb-0 flex flex-col justify-center md:m-0">
            <div className="rounded-lg bg-white px-10 shadow-sm">
                <h1 className="m-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                    Skip work history?
                </h1>
                <div className="flex  justify-around">
                    <input
                        type="button"
                        className="m-3 my-10 w-full rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                        onClick={navigateBack}
                        value="No"
                    />
                    <input
                        type="submit"
                        className="m-3 my-10 w-full rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                        onClick={navigateForward}
                        value="Yes"
                    />
                </div>
            </div>
        </div>
    );
};

export default SkipWorkHistoryModal;
