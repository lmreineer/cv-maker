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
        <div className="flex w-[616px] flex-col justify-center">
            <div className="rounded-lg bg-white">
                <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                    Skip work history?
                </h1>
                <div className="flex  justify-around">
                    <input
                        type="button"
                        className="my-10 w-56 rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                        onClick={navigateBack}
                        value="No"
                    />
                    <input
                        type="submit"
                        className="my-10 w-56 rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                        onClick={navigateForward}
                        value="Yes"
                    />
                </div>
            </div>
        </div>
    );
};

export default SkipWorkHistoryModal;
