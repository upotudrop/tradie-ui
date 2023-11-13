from pydantic import BaseModel

class Suburb(BaseModel):
    id: int 
    name: str 
    postcode: str