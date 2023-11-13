import { JobOptions } from '../index';
import { render, act } from '@testing-library/react'
import { JOB_OPTION_ACCEPTED_KEY, JOB_OPTION_INVITED_KEY } from '../../../constants';

describe('Job Options Testing suite', () => {

    it('should be able to render tradie ui', async () => {
        const { container, getByText } = await act(async () => render(
        <JobOptions 
            children={<></>} 
            onChangeOption={jest.fn()}
            optionKey={JOB_OPTION_INVITED_KEY} />
            )
        )

        expect(getByText(JOB_OPTION_INVITED_KEY)).toBeInTheDocument();
        expect(getByText(JOB_OPTION_ACCEPTED_KEY)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
 
})
