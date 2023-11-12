from typing import Optional
from pydantic import BaseModel
from datetime import datetime 

class Category(BaseModel):
    id: int 
    name: str 
    parent_category_id: int