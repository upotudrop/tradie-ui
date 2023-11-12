from typing import Optional
from pydantic import BaseModel
from datetime import datetime 

class Suburb(BaseModel):
    id: int 
    name: str 
    postcode: str