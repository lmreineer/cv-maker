import { useNavigate } from 'react-router-dom';

import Select from 'react-select';

const AdditionalWorkHistoryForm = ({
    secondCurrentlyWorkingCheckboxValue,
    setSecondCurrentlyWorkingCheckboxValue,
    handleSubmit,
    handleChange,
    setFieldValue
}) => {
    // generate options for react-select inputs
    const generateOptions = (loop, n) => {
        const options = [];
        for (let i = 0; i <= loop; i += 1) {
            const year = n - i;
            options.push({ value: year.toString(), label: year.toString() });
        }

        // adjust numbering for month options
        options.forEach((month) => {
            if (month.value.length === 1) {
                month.value = `0${month.value}`;
                month.label = `0${month.label}`;
            }
        });

        return options;
    };

    // adjust styles of react-select inputs
    const customStyles = {
        control: (base) => ({
            ...base,
            border: '2px solid #E5E7EB',
            boxShadow: 'none',
            margin: '0.75rem',
            paddingLeft: '1rem',
            height: '3.75rem',
            borderRadius: '0.5rem',
            '&:hover': {
                border: '2px solid #7B8B5E'
            }
        })
    };

    const maximizeTextLength = (inputValue) => {
        const maxLength = 4;
        return inputValue.length <= maxLength
            ? inputValue
            : inputValue.substr(0, maxLength);
    };

    const handleCheckedState = () => {
        secondCurrentlyWorkingCheckboxValue === true
            ? setSecondCurrentlyWorkingCheckboxValue(false)
            : setSecondCurrentlyWorkingCheckboxValue(true);
    };

    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/work-history-summary');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="my-10 text-center font-cabin text-4xl font-semibold tracking-wider text-very-dark-yellow-green">
                    Your another work
                </h1>
                <div className="flex">
                    <input
                        type="text"
                        name="secondJobTitle"
                        placeholder="Job Title"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        className={
                            'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                        }
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="secondCompany"
                        placeholder="Company"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        className={
                            'm-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green'
                        }
                        maxLength={40}
                    />
                </div>
                <div className="flex">
                    <input
                        type="text"
                        name="secondCityWork"
                        placeholder="City"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={40}
                    />
                    <input
                        type="text"
                        name="secondStateWork"
                        placeholder="State / Country"
                        className="m-3 w-full rounded-lg border-2 p-4 outline-0 focus:border-dark-yellow-green"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={40}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="secondYearStartWork"
                        placeholder="Year Start"
                        options={generateOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('secondYearStartWork', e.value)
                        }
                        onInputChange={maximizeTextLength}
                    />
                    <Select
                        name="secondMonthStartWork"
                        placeholder="Month Start"
                        options={generateOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('secondMonthStartWork', e.value)
                        }
                        onInputChange={maximizeTextLength}
                    />
                </div>
                <div className="flex">
                    <Select
                        name="secondYearEndWork"
                        placeholder="Year End"
                        options={generateOptions(70, 2023)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('secondYearEndWork', e.value)
                        }
                        onInputChange={maximizeTextLength}
                        isDisabled={secondCurrentlyWorkingCheckboxValue}
                    />
                    <Select
                        name="secondMonthEndWork"
                        placeholder="Month End"
                        options={generateOptions(12, 12)}
                        styles={customStyles}
                        onChange={(e) =>
                            setFieldValue('secondMonthEndWork', e.value)
                        }
                        onInputChange={maximizeTextLength}
                        isDisabled={secondCurrentlyWorkingCheckboxValue}
                    />
                </div>
                <div className="flex">
                    <label className="m-4 flex select-none text-base hover:cursor-pointer">
                        <input
                            type="checkbox"
                            name="secondCurrentlyWorkingCheckbox"
                            className="mr-3 w-4 hover:cursor-pointer"
                            checked={secondCurrentlyWorkingCheckboxValue}
                            onChange={handleCheckedState}
                        />
                        I currently work here
                    </label>
                </div>
                <div className="flex justify-around">
                    <input
                        type="button"
                        className="m-3 my-10 w-full rounded-lg bg-gray-300 p-5 transition hover:cursor-pointer hover:bg-gray-400"
                        onClick={navigateBack}
                        value="Back"
                    />
                    <input
                        type="submit"
                        className="m-3 my-10 w-full rounded-lg bg-yellow-green p-5 transition hover:cursor-pointer hover:bg-dark-yellow-green"
                        value="Continue"
                    />
                </div>
            </form>
        </>
    );
};

export default AdditionalWorkHistoryForm;
