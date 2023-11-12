import React from 'react';
import { JobContactInfo } from '../commonComponents/JobUI/JobContactInfo';
import { JobDescription } from '../commonComponents/JobUI/JobDescription';
import { JobLocationInfo } from '../commonComponents/JobUI/JobLocationInfo';
import { Button } from '../commonComponents/buttons/Button';
import { Job } from '../types';

interface Props {
    jobDetails: Job
}

export const JobInvitation:React.FC<Props> = ({ 
    jobDetails
}) => {
    const {
        contact_name,
        created_at,
        suburb,
        description,
        id,
        price
    } = jobDetails;

    return (
        <section className="job-card-container">
            <JobContactInfo 
            contactFirstName={contact_name}
            dateJobCreated={created_at}
            />

            <JobLocationInfo 
            suburbName={suburb.name} 
            suburbPostCode={suburb.postcode} 
            jobId={id}            
            />

            <JobDescription 
            description={description}
            />

            <section className='button-group'>
                <Button type='primary'>Accept</Button>
                <Button type='secondary'>Decline</Button>
                <p>${price}</p>
            </section>
        </section>
    )
}