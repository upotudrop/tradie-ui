import { Job } from "../types"
import { AcceptedJob } from "./AcceptedJob"

interface Props {
    jobs: Job[]
}

export const AcceptedJobs:React.FC<Props> = ({ jobs }) => {
    if(jobs.length === 0) {
        return (
            <section>
               You have not accepted any jobs
            </section>
        )
    }

    return (
       <section className='job-root-container'>
        {jobs.map((job) => (
            <AcceptedJob 
                key={job.id} 
                jobDetails={job}           
            />
        ))}
       </section>
    )
}