import React from 'react';

interface Props {
    selected: boolean
    optionName: string
    onClick: () => void;
}

export const OptionTab:React.FC<Props> = ({ selected, optionName, onClick }) => {
    return (
        <section 
        className={selected ? 'selected-option-tab' : 'default-option-tab'}
        onClick={onClick}>
            <p>{optionName}</p>
        </section>
    )
}