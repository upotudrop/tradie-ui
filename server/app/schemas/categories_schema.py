from pydantic import BaseModel

class Category(BaseModel):
    id: int 
    name: str 
    parent_category_id: int