import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Modal from '../Modal';

describe('<Modal />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Modal />));

    expect(container).toBeInTheDocument();
  });
});
