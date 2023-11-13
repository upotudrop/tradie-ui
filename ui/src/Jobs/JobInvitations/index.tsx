import React, { useEffect, useState } from 'react';
import { API_BASE_URL, restfulClient } from '../../API/setup/restClientProvider';
import { Job, JobStatusKeys } from '../../types';
import { JobInvitation } from './JobInvitation';
import './jobInvitationStyles.css'

interface Props {}

export const JobInvitations:React.FC<Props> = () => {
    const [jobInvitations, setJobInvitations] = useState<Job[]>([]);
    const [error, setError] = useState("");

    const fetchAPI = (url: string) => {
        //todo: add abort controller
        try {
          restfulClient
            .get(url)
            .then((res) => {
              if (res.status === 200) {
                setJobInvitations(res.data);
              }
            })
            .catch((error) => {
              //handle errors here
              console.log(error)
            });
        } catch (error) {
            //add specific error messages later
            setError("Please try again!");
        }
      };
    
      useEffect(() => {
        fetchAPI(`${API_BASE_URL}/api/open-jobs`);
      }, []);


    const onHandleJobInteraction = (
        id: number, 
        status: JobStatusKeys,
        ): void => {
            restfulClient.patch(`${API_BASE_URL}/api/jobs/${id}`, status)
            .then((response) => {
                if(response.status === 200) {
                    removeJobInvitation(id);
                }
            }).catch(() => {
                //todo: add error catching here
            })
        }

    const removeJobInvitation = (id: number) => {
        setJobInvitations(jobInvitations?.filter((job) => job.id !== id))
    }


    if(error) {
        return (
            <section>
                Error: {error}
            </section>
        )
    }

    if(jobInvitations?.length === 0) {
        return (
            <section>
                No Jobs currently available
            </section>
        )
    }

    return (
       <section className='job-root-container'>
        {jobInvitations?.map((job) => (
            <JobInvitation 
                key={job.id} 
                jobDetails={job} 
                onHandleJob={onHandleJobInteraction}      
            />
        ))}
       </section>
    )
}