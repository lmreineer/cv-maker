import { useNavigate } from 'react-router-dom';

const WorkHistoryList = () => {
    const navigate = useNavigate();
    const navigateBack = () => navigate('/work-responsibilities');

    return (
        <form className="flex w-1/2 flex-col justify-center">
            <h1 className="mb-10 mt-16 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                Work History List:
            </h1>
            <div className="flex flex-col justify-center">
                <input
                    placeholder="Bullet Point 1"
                    className="m-3 h-[3.6rem] resize-none break-all rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                    maxLength={250}
                />
            </div>
            <div className="flex justify-around">
                <input
                    type="button"
                    className="my-10 w-56 rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                    onClick={navigateBack}
                    value="Back"
                />
                <input
                    type="submit"
                    id="continue-button"
                    className="my-10 w-56 rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                />
            </div>
        </form>
    );
};

export default WorkHistoryList;
