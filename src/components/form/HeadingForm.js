const Heading = () => {
    const preventRedirect = (e) => {
        e.preventDefault();
    };

    return (
        <form className='flex justify-around' onSubmit={preventRedirect}>
            <div>
                <h1 className='text-4xl my-10 font-semibold text-center'>
                    Contact Information:
                </h1>
                <div>
                    <label>
                        <input
                            type='text'
                            name='first-name'
                            placeholder='First name'
                            className='border-2 border-black rounded-lg m-4 p-4'
                        />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='last-name'
                            placeholder='Last name'
                            className='border-2 border-black rounded-lg m-4 p-4'
                        />
                    </label>
                </div>
                <div>
                    <label className='flex'>
                        <input
                            type='text'
                            name='profession'
                            placeholder='Profession'
                            className='border-2 border-black rounded-lg m-4 p-4 w-full'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type='text'
                            name='country'
                            placeholder='Country'
                            className='border-2 border-black rounded-lg m-4 p-4'
                        />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='city'
                            placeholder='City'
                            className='border-2 border-black rounded-lg m-4 p-4'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type='text'
                            name='state-province'
                            placeholder='State / Province'
                            className='border-2 border-black rounded-lg m-4 p-4'
                        />
                    </label>
                    <label>
                        <input
                            type='number'
                            name='zip-code'
                            placeholder='Zip Code'
                            className='border-2 border-black rounded-lg m-4 p-4'
                        />
                    </label>
                </div>
                <div>
                    <label className='flex'>
                        <input
                            type='tel'
                            name='phone'
                            placeholder='Phone'
                            className='border-2 border-black rounded-lg m-4 p-4 w-full'
                        />
                    </label>
                </div>
                <div>
                    <label className='flex'>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            id='email'
                            className='border-2 border-black rounded-lg m-4 p-4 w-full'
                        />
                    </label>
                </div>
                <div className='flex justify-around'>
                    <button className='bg-gray-300 hover:bg-gray-400 transition p-5 w-56 rounded-lg my-10'>
                        Back
                    </button>
                    <input
                        type='submit'
                        id='continue-button'
                        className='bg-green-400 hover:bg-green-500 hover:cursor-pointer transition p-5 w-56 rounded-lg bg-red-500 my-10'
                        value='Continue'
                    />
                </div>
            </div>
            <div>
                <h1 className='text-4xl my-10 font-semibold text-center'>Preview</h1>
            </div>
        </form>
    );
};

export default Heading;
