import React from 'react';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
    type: 'primary' | 'secondary'
}

export const Button:React.FC<Props> = ({ children, onClick, disabled, type }, props) => {
    return (
        <button 
        onClick={onClick} 
        disabled={disabled} 
        {...props}
        className={`${type}-button`}
        >
            {children}
        </button>
    )
}