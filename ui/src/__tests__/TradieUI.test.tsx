import TradieUI, { tempJobs } from '../TradieUI';
import MockAdapter from 'axios-mock-adapter';
import { render, act } from '@testing-library/react'
import axios from 'axios';

describe('Tradie UI Testing suite', () => {
    beforeEach(() => {
        const mock = new MockAdapter(axios);
        mock.onGet('http://localhost:8000/api/jobs').reply(200, tempJobs)
    })

    it('should be able to render tradie ui', async () => {
        const { container } = await act(async () => render(<TradieUI />))
        expect(container).toMatchSnapshot();
    })

    it('should render `no jobs available` if response empty', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet('http://localhost:8000/api/jobs').reply(200, [])

        const { queryByText } = await act(async () => render(<TradieUI />))
        expect(queryByText('No Jobs currently available')).toBeInTheDocument();
    }) 
})
