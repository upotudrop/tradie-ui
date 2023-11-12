from sqlalchemy.orm import Session
from app.schemas.jobs_schema import Job, JobDTO
from app.schemas.suburbs_schema import Suburb
from app.models.jobs_model import Jobs 
from typing import List


def get_all_open_jobs(db: Session) -> List[JobDTO]:
    all_jobs = Jobs.select_all_open_jobs(db)

    formatted_jobs = [
        JobDTO( 
            **jobs.to_schema().__dict__,
            suburb=suburbs.to_schema().__dict__,
            category=categories.to_schema().__dict__,
        ) for jobs, suburbs, categories in all_jobs
    ]


    return formatted_jobs

def get_all_accepted_jobs(db: Session) -> List[JobDTO]:
    all_jobs = Jobs.select_all_accepted_jobs(db)

    formatted_jobs = [
        JobDTO( 
            **jobs.to_schema().__dict__,
            suburb=suburbs.to_schema().__dict__,
            category=categories.to_schema().__dict__,
        ) for jobs, suburbs, categories in all_jobs
    ]

    return formatted_jobs


"""
controller to handle updating the job status to either 'accepted' or 'declined
"""
def update_job_status(db: Session, id: int, status: str) -> None:
    if(not Jobs.does_job_exist(db, id)):
        return {
            "Error": f"Job: {id} does not exist"
        }

    Jobs.update_job_status(db, id, status)

    return None