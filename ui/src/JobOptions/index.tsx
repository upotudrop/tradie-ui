import React from 'react';
import { JobOptionKeys } from '../types';
import { OptionTab } from './components/OptionTab';
import { ACCEPTED_JOB_OPTION, INVITED_JOB_OPTION } from './constants';
import './jobOptionStyles.css';

interface Props {
    children: React.ReactNode;
    onChangeOption: (key: JobOptionKeys) => void;
    optionKey: JobOptionKeys;
}

export const JobOptions:React.FC<Props> = ({ children, onChangeOption, optionKey }) => {
    return (
        <>
            <section className='job-options-container'>
                <OptionTab 
                selected={optionKey === INVITED_JOB_OPTION} 
                optionName={INVITED_JOB_OPTION} 
                onClick={() => onChangeOption(INVITED_JOB_OPTION)}
                />
                <OptionTab 
                   selected={optionKey === ACCEPTED_JOB_OPTION} 
                   optionName={ACCEPTED_JOB_OPTION} 
                   onClick={() => onChangeOption(ACCEPTED_JOB_OPTION)}
                />
            </section>
            {children}
        </>
    )
}