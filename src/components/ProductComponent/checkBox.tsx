import React, { ChangeEvent, useState } from 'react'
interface CheckboxProps {
    label: string
    value: string
    isSelected: boolean
    onClickHandler: (value: string) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, value, isSelected, onClickHandler }) => {
    const [isChecked, setIsChecked] = useState(isSelected)

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
        onClickHandler(value)
    }

    return (
        <label className={"flex items-center gap-3 whitespace-nowrap cursor-pointer text-lg font-medium"}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={"appearance-none w-6 h-6 border-2 border-gray-500 rounded-md outline-none cursor-pointer checked:bg-gray-500 peer-[]:p-4 checked:rounded-full checked:before:text-lg checked:font-bold checked:before:text-white checked:before:absolute checked:before:top-10 checked:before:right-3 checked:before:content-['\\2713']"}
            />
            {label}
        </label>
    )
}