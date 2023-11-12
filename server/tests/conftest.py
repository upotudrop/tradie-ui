import pytest
import logging 

from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy_utils import create_database, drop_database, database_exists

from app.server import app
from app.db.core import Base, get_db
from app.core.config import TEST_DATABASE_URL

logger = logging.getLogger(__name__)

engine = create_engine(str(TEST_DATABASE_URL), pool_pre_ping=True)

def override_get_db():
    """" Override """
    try:
        db = Session(autocommit=False, autoflush=False, bind=engine)
        yield db
    finally:
        db.close()


@pytest.fixture(scope="session", autouse=True)
def create_db():
    """ creating db model in database """
    if database_exists(str(TEST_DATABASE_URL)):
        drop_database(str(TEST_DATABASE_URL))
        
    create_database(str(TEST_DATABASE_URL))
    print(f"Creating Database {TEST_DATABASE_URL}")

    Base.metadata.create_all(bind=engine)
    app.dependency_overrides[get_db] = override_get_db

    yield 1

    drop_database(str(TEST_DATABASE_URL))
    print(f"Dropping Database {TEST_DATABASE_URL}")

@pytest.fixture()
def get_db_session():
    """ Getting session for db transaction """
    session = Session(autocommit=False, autoflush=False, bind=engine)
    yield session

    session.close()

@pytest.fixture()
def client():
    """ Getting testclient of app """
    with TestClient(app) as client:
        yield client