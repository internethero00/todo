import React from "react";

type selectProps = {
    defaultValue: string,
    options: {value: string, name: string}[],
    onChange: (selectedValue: string) => void,
    value: string
}
const MySelect: React.FC<selectProps> = ({options,defaultValue, onChange, value}) => {
    console.log(value)
    return (
        <select
            value={value}
            onChange={(event) => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => (
                <option value={option.value} key={option.value}>{option.name}</option>
            ))}

        </select>
    );
};

export default MySelect;