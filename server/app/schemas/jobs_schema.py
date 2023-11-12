from typing import Optional, Union
from pydantic import BaseModel
from datetime import datetime 
from app.schemas.categories_schema import Category
from app.schemas.suburbs_schema import Suburb

class Job(BaseModel):
    id: int 
    status: str 
    contact_name: str 
    contact_email: str 
    price: int 
    description: str
    created_at: datetime 
    updated_at: Optional[datetime] = None 
    suburb_id: int 
    category_id: int

class JobDTO(Job):
    category: Category
    suburb: Suburb

