from app.db.core import Base
from sqlalchemy import VARCHAR, INTEGER
from sqlalchemy.sql.schema import Column
from app.schemas.suburbs_schema import Suburb

class Suburb(Base):
    __tablename__ = 'suburbs'

    id = Column(INTEGER, primary_key=True, autoincrement=True)
    name = Column(VARCHAR(255), nullable=False)
    postcode = Column(VARCHAR(4), nullable=False)

    def to_schema(self) -> Suburb: 
        return Suburb(
            id=self.id,
            name=self.name,
            postcode=self.postcode
        )
