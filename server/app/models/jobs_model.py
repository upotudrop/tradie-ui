from app.db.core import Base
from sqlalchemy import VARCHAR, INTEGER, TEXT, TIMESTAMP, ForeignKey
from sqlalchemy.sql.schema import Column
from sqlalchemy.orm import Session, relationship
from datetime import datetime
from app.schemas.jobs_schema import Job
from app.models.categories_model import Categories
from app.models.suburb_model import Suburb

class Jobs(Base):
    __tablename__ = 'jobs'

    id = Column(INTEGER, primary_key=True, autoincrement=True)
    status = Column(VARCHAR(50), nullable=False, default="new")
    contact_name = Column(VARCHAR(255), nullable=False)
    contact_phone = Column(VARCHAR(255), nullable=False)
    contact_email = Column(VARCHAR(255), nullable=False)
    price = Column(INTEGER, nullable=False)
    description = Column(TEXT, nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, default=datetime.now)
    updated_at = Column(TIMESTAMP, nullable=False, default="0000-00-00 00:00:00", onupdate=datetime.now)
    suburb_id = Column(INTEGER, ForeignKey("suburb.id"))
    category_id = Column(INTEGER, ForeignKey("category.id"))

    def to_schema(self) -> Job:
        return Job(
            id=self.id,
            status=self.status,
            contact_name=self.contact_name,
            contact_phone=self.contact_phone,
            contact_email=self.contact_email,
            price=self.price,
            description=self.description,
            created_at=self.created_at,
            updated_at=self.updated_at,
            suburb_id=self.suburb_id,
            category_id=self.category_id
        )


    @classmethod 
    def select_all_jobs(cls, db:Session):
        query = (
            db.query(Jobs, Suburb, Categories)
            .join(Suburb, Jobs.suburb_id == Suburb.id)
            .join(Categories, Jobs.category_id == Categories.id)
            .all()
        )

        return query

    @classmethod
    def update_job_status(cls, db: Session, id: int, status: str):
        db.query(Jobs).filter(Jobs.id == id).update({ 'status': status })
        db.commit()


    @classmethod
    def does_job_exist(cls, db: Session, id: int): 
        return db.query(Jobs).filter(Jobs.id == id)
