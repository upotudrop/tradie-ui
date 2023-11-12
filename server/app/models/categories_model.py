from app.db.core import Base
from sqlalchemy import Boolean, VARCHAR, DateTime, INTEGER, TEXT, TIMESTAMP, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql.schema import Column
from sqlalchemy.orm import Session, relationship
from datetime import datetime
from app.schemas.categories_schema import Category

class Categories(Base):
    __tablename__ = 'categories'

    id = Column(INTEGER, primary_key=True, autoincrement=True)
    name = Column(VARCHAR(255), nullable=False)
    parent_category_id = Column(INTEGER, nullable=False, default="0")

    def to_schema(self) -> Category:
        return Category(
            id=self.id,
            name=self.name,
            parent_category_id=self.parent_category_id
        )