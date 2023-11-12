from fastapi.testclient import TestClient
from app.server import app

class TestJobs: 
    def test_routes_exist(self, client: TestClient) -> None: 
        current_valid_routes = [
            "jobs: get-all-open-jobs",
            "jobs: get-all-accepted-jobs",
            "jobs: update-job-status"
        ]

        for route in current_valid_routes: 
            res = client.get(app.url_path_for(route))
            assert res.status_code == 200

    def _test_01_update_status_should_fail_with_bad_status(self, client: TestClient) -> None:

        res = client.get(app.url_path_for("jobs: update-job-status"), "invalid-status")
        assert res.status_code == 400