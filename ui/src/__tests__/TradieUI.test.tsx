import TradieUI from '../TradieUI';
import { render } from '@testing-library/react'

describe('Tradie UI Testing suite', () => {

    it('should be able to render tradie ui', () => {
        const { container } = render(<TradieUI />)
        expect(container).toMatchSnapshot();
    })

})
