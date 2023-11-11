import React from 'react';
import '../jobInvitationStyles.css'

interface Props {
    jobId: number;
    contactFirstName: string;
    dateJobCreated: string;
    suburbOfJob: string;
    categoryOfJob: string;
    descriptionOfJob: string;
    priceOfJob: number;
}

export const JobInvitationCard:React.FC<Props> = ({ 
    jobId,
    contactFirstName,
    dateJobCreated,
    suburbOfJob,
    categoryOfJob,
    descriptionOfJob,
    priceOfJob
}) => {
    return (
        <section className="job-invitation-card-container">
            <section className="job-invitation-card-job-info-header">
                <span className='job-owner-name-icon'>
                    {contactFirstName[0]}
                </span>
                {contactFirstName}
                <section>
                    {dateJobCreated}
                </section>
            </section>

            {/* //suburb information */}
            <section>

            </section>

            <section>
                <p>{descriptionOfJob}</p>
            </section>

            <section>
                <button>Accept</button>
                <button>Decline</button>
                <p>${priceOfJob}</p>
            </section>

        </section>
    )
}