import axios from "axios";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { AcceptedJobs } from "..";
import { tempJobs } from "../../../__mocks__/tempJobs";
import MockAdapter from 'axios-mock-adapter';
import { API_BASE_URL } from "../../../API/setup/restClientProvider";

describe('Accepted Jobs testing suite', () => {
    beforeEach(() => {
        const mock = new MockAdapter(axios);
        mock.onGet(`${API_BASE_URL}/api/accepted-jobs`).reply(200, tempJobs)
    })
    
    it('should be able to render tradie ui', async () => {
        const { container } = await act(async () => render(<AcceptedJobs />))
        expect(container).toMatchSnapshot();
    })
    
    it('should render `no jobs available` if response empty', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet(`${API_BASE_URL}/api/accepted-jobs`).reply(200, [])
    
        const { queryByText } = await act(async () => render(<AcceptedJobs />))
        expect(queryByText('No Jobs currently available')).toBeInTheDocument();
    }) 
})
