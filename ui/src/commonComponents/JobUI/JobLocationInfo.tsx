import React from 'react';

interface Props {
    suburbName: string;
    suburbPostCode: string;
    jobId: number;
}

export const JobLocationInfo:React.FC<Props> = ({ suburbName, suburbPostCode, jobId }) => {
    return (
        <section className='job-suburb-info-container'>
            <p>{suburbName}</p>
            <p>{suburbPostCode}</p>
            <p>Job ID: {jobId}</p>
        </section>
    )
}