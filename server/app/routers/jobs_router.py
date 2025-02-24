
from fastapi import APIRouter, Depends, Body, HTTPException
from sqlalchemy.orm import Session
from app.db.core import get_db
from app.schemas.jobs_schema import JobDTO
from app.controllers import jobs_controller
from typing import List

"""
Router for all the jobs endpoints
"""

jobs_api = APIRouter()

@jobs_api.get('/open-jobs', name="jobs: get-all-open-jobs", response_model=List[JobDTO])
def get_all_open_jobs(db: Session = Depends(get_db)) -> List[JobDTO]:
    return jobs_controller.get_all_open_jobs(db)

@jobs_api.get('/accepted-jobs', name="jobs: get-all-accepted-jobs", response_model=List[JobDTO])
def get_all_accepted_jobs(db: Session = Depends(get_db)) -> List[JobDTO]:
    return jobs_controller.get_all_accepted_jobs(db)

@jobs_api.patch('/jobs/{id}', name="jobs: update-job-status")
def update_job_status(
    id: int,
    db: Session = Depends(get_db),
    status: str = Body(None, description="the status that the job should be updated to")
    ):
    if any([
        status == 'accepted',
        status == 'declined'
    ]): 
        return jobs_controller.update_job_status(db, id, status)

    raise HTTPException(status_code=400, detail="status must be either 'accepted' or 'declined'")
