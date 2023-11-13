import axios from "axios";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { JobInvitations } from "..";
import { tempJobs } from "../../../__mocks__/tempJobs";
import MockAdapter from 'axios-mock-adapter';
import { API_BASE_URL } from "../../../API/setup/restClientProvider";

describe('Job Invitations testing suite', () => {
    beforeEach(() => {
        const mock = new MockAdapter(axios);
        mock.onGet(`${API_BASE_URL}/api/open-jobs`).reply(200, tempJobs)
    })
    
    it('should be able to render tradie ui', async () => {
        const { container } = await act(async () => render(<JobInvitations />))
        expect(container).toMatchSnapshot();
    })
    
    it('should render `no jobs available` if response empty', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet(`${API_BASE_URL}/api/open-jobs`).reply(200, [])
    
        const { queryByText } = await act(async () => render(<JobInvitations />))
        expect(queryByText('No Jobs currently available')).toBeInTheDocument();
    }) 
})
