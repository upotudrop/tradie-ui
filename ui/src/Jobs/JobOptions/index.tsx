import React from 'react';
import { JOB_OPTION_ACCEPTED_KEY, JOB_OPTION_INVITED_KEY } from '../../constants';
import { JobOptionKeys } from '../../types';
import { OptionTab } from './components/OptionTab';
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
                selected={optionKey === JOB_OPTION_INVITED_KEY} 
                optionName={JOB_OPTION_INVITED_KEY} 
                onClick={() => onChangeOption(JOB_OPTION_INVITED_KEY)}
                />
                <OptionTab 
                   selected={optionKey === JOB_OPTION_ACCEPTED_KEY} 
                   optionName={JOB_OPTION_ACCEPTED_KEY} 
                   onClick={() => onChangeOption(JOB_OPTION_ACCEPTED_KEY)}
                />
            </section>
            {children}
        </>
    )
}