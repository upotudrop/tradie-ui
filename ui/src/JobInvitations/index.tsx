import React from 'react';
import { Job } from '../types';
import { JobInvitationCard } from './components/JobInvitationCard';

interface Props {
    jobs: Job[]
}

export const JobInvitations:React.FC<Props> = ({ jobs }) => {
    if(jobs.length === 0) {
        return (
            <section>
                No Jobs currently available
            </section>
        )
    }

    return (
       <section>
        {jobs.map((job) => (
            <JobInvitationCard 
                key={job.id} 
                jobId={job.id}
                contactFirstName={job.contact_name} 
                dateJobCreated={job.created_at} 
                suburbOfJob={'N/A'} 
                categoryOfJob={'N/A'} 
                descriptionOfJob={job.description} 
                priceOfJob={job.price}            
            />
        ))}
       </section>
    )
}