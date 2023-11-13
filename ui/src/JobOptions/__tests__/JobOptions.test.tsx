import { JobOptions } from '../index';
import { render, act } from '@testing-library/react'
import { ACCEPTED_JOB_OPTION, INVITED_JOB_OPTION } from '../constants';

describe('Job Options Testing suite', () => {

    it('should be able to render tradie ui', async () => {
        const { container, getByText } = await act(async () => render(
        <JobOptions 
            children={<></>} 
            onChangeOption={jest.fn()}
            optionKey={INVITED_JOB_OPTION} />
            )
        )

        expect(getByText(INVITED_JOB_OPTION)).toBeInTheDocument();
        expect(getByText(ACCEPTED_JOB_OPTION)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
 
})
