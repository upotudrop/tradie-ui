import React from 'react';
import { formatDateString } from '../../Services/dateServices';

interface Props {
    contactFirstName: string; 
    dateJobCreated: string;
}

export const JobContactInfo:React.FC<Props> = ({ contactFirstName, dateJobCreated }) => {
    return (
        <section className="job-invitation-card-job-info-header">
             <span className='job-owner-name-icon'>
                    {contactFirstName[0]}
            </span>
                
            <section>
                    <p className='job-owner-name'>{contactFirstName} </p> 
                    {formatDateString(dateJobCreated)}
            </section>
        </section>
    )
}