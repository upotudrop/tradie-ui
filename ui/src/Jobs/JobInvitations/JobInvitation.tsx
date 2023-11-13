import React from 'react';
import { JobContactInfo } from '../../commonComponents/JobUI/JobContactInfo';
import { JobDescription } from '../../commonComponents/JobUI/JobDescription';
import { JobLocationInfo } from '../../commonComponents/JobUI/JobLocationInfo';
import { Button } from '../../commonComponents/buttons/Button';
import { Job, JobStatusKeys } from '../../types';
import { ACCEPTED_JOB_STATUS, DECLINED_JOB_STATUS } from '../../constants';

interface Props {
    jobDetails: Job
    onHandleJob: (id: number, status: JobStatusKeys) => void;
}

export const JobInvitation:React.FC<Props> = ({ 
    jobDetails,
    onHandleJob
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
                <Button type='primary' onClick={() => onHandleJob(id, ACCEPTED_JOB_STATUS)}>Accept</Button>
                <Button type='secondary' onClick={() => onHandleJob(id, DECLINED_JOB_STATUS)}>Decline</Button>
                <p>${price}</p>
                {/* //handle specific error here */}
            </section>
        </section>
    )
}