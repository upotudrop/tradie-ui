import React from 'react';
import { Job } from '../types';
import { JobInvitation } from './JobInvitation';
import './jobInvitationStyles.css'

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
       <section className='job-root-container'>
        {jobs.map((job) => (
            <JobInvitation 
                key={job.id} 
                jobDetails={job}           
            />
        ))}
       </section>
    )
}