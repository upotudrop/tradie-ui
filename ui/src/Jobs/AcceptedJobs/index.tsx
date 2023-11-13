import { useEffect, useState } from "react";
import { API_BASE_URL, restfulClient } from "../../API/setup/restClientProvider";
import { Job } from "../../types"
import { AcceptedJob } from "./AcceptedJob"

interface Props {
}

export const AcceptedJobs:React.FC<Props> = () => {
  const [acceptedJobs, setAcceptedJobs] = useState<Job[]>([]);
  const [error, setError] = useState("");

  const fetchAPI = (url: string) => {
    //todo: add abort controller
    try {
      restfulClient
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            setAcceptedJobs(res.data);
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
    fetchAPI(`${API_BASE_URL}/api/accepted-jobs`);
  }, []);


    if(error) {
      return (
        <section>
          Error: {error}
        </section>

      )
    }

    if(acceptedJobs?.length === 0) {
        return (
            <section>
               You have not accepted any jobs
            </section>
        )
    }

    return (
       <section className='job-root-container'>
        {acceptedJobs?.map((job) => (
            <AcceptedJob 
                key={job.id} 
                jobDetails={job}           
            />
        ))}
       </section>
    )
}