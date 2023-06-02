import React, { useState } from 'react';

const Heading = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const preventRedirect = (e) => {
        e.preventDefault();

        // Perform form validation
        const validationErrors = {};
        if (firstName.trim() === '') {
            validationErrors.firstName = 'First name is required';
        }
        if (lastName.trim() === '') {
            validationErrors.lastName = 'Last name is required';
        }
        if (email.trim() === '') {
            validationErrors.email = 'Email is required';
        }

        // Set the validation errors
        setErrors(validationErrors);
    };

    return (
        <form onSubmit={preventRedirect}>
            <h1 className='text-4xl my-10 font-semibold text-center font-josefin-sans text-[#4D573B]'>
                Contact Information:
            </h1>
            <div>
                <div className='flex'>
                    <label>
                        <input
                            type='text'
                            name='first-name'
                            placeholder='First name'
                            className={
                                errors.firstName
                                    ? ' border-2 border-red-700 rounded-lg m-3 p-4'
                                    : 'border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md'
                            }
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && (
                            <p className='ml-4 text-red-800'>{errors.firstName}</p>
                        )}
                    </label>
                    <label>
                        <input
                            type='text'
                            name='last-name'
                            placeholder='Last name'
                            className={
                                errors.lastName
                                    ? ' border-2 border-red-700 rounded-lg m-3 p-4'
                                    : 'border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md'
                            }
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && (
                            <p className='ml-4 text-red-800'>{errors.lastName}</p>
                        )}
                    </label>
                </div>
                <div>
                    <label className='flex'>
                        <input
                            type='text'
                            name='profession'
                            placeholder='Profession'
                            className='border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md w-full'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type='text'
                            name='country'
                            placeholder='Country'
                            className='border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md'
                        />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='city'
                            placeholder='City'
                            className='border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type='text'
                            name='state-province'
                            placeholder='State / Province'
                            className='border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md'
                        />
                    </label>
                    <label>
                        <input
                            type='tel'
                            name='zip-code'
                            placeholder='ZIP Code'
                            className='border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md'
                        />
                    </label>
                </div>
                <div>
                    <label className='flex'>
                        <input
                            type='tel'
                            name='phone-number'
                            placeholder='Phone'
                            className='border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md w-full'
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
                            className={
                                errors.email
                                    ? 'border-2 border-red-700 rounded-lg m-3 p-4 w-full'
                                    : 'border-2 rounded-lg m-3 p-4 outline-0 focus:border-dark-yellow focus:shadow-inner focus:shadow-md w-full'
                            }
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    {errors.lastName && (
                        <p className='ml-4 text-red-800'>{errors.email}</p>
                    )}
                </div>
                <div className='flex justify-around'>
                    <button className='bg-gray-300 hover:bg-gray-400 transition p-5 w-56 rounded-lg my-10'>
                        Back
                    </button>
                    <input
                        type='submit'
                        id='continue-button'
                        className='bg-[#CDE4A2] hover:bg-dark-yellow hover:cursor-pointer transition p-5 w-56 rounded-lg my-10'
                        value='Continue'
                    />
                </div>
            </div>
        </form>
    );
};

export default Heading;
