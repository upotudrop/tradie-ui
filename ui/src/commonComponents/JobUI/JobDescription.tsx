import React from 'react';

interface Props {
    description: string
}

export const JobDescription:React.FC<Props> = ({ description }) => {
    return (
        <section>
            <p>{description}</p>
        </section>
    )
}