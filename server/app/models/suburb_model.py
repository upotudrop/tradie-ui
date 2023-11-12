from app.db.core import Base
from sqlalchemy import Boolean, VARCHAR, DateTime, INTEGER, TEXT, TIMESTAMP, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql.schema import Column
from sqlalchemy.orm import Session, relationship
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
