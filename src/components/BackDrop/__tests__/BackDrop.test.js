import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import BackDrop from '../BackDrop';

describe('<BackDrop />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<BackDrop />));

    expect(container).toBeInTheDocument();
  });
});
