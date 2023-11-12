import React from 'react';
import { JobContactInfo } from '../commonComponents/JobUI/JobContactInfo';
import { JobDescription } from '../commonComponents/JobUI/JobDescription';
import { JobLocationInfo } from '../commonComponents/JobUI/JobLocationInfo';
import { Button } from '../commonComponents/buttons/Button';
import { Job } from '../types';
import { AcceptedJobContactInfo } from '../commonComponents/JobUI/AcceptedJobContactInfo';

interface Props {
    jobDetails: Job
}

export const AcceptedJob:React.FC<Props> = ({ 
    jobDetails
}) => {
    const {
        contact_name,
        created_at,
        suburb,
        description,
        id,
        price,
        contact_email,
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

            <AcceptedJobContactInfo 
            emailAddress={contact_email}
            />

            <JobDescription 
            description={description}
            />
        </section>
    )
}