import React from 'react';

interface Props {
    emailAddress: string;
}

export const AcceptedJobContactInfo:React.FC<Props> = ({ emailAddress }) => {
    return (
        <section className='flex-container'>
            <p className='highlighted-contact-info'>{emailAddress}</p>
        </section>
    )
}