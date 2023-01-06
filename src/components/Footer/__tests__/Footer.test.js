import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Footer from '../Footer';

describe('<Footer />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Footer />));

    expect(container).toBeInTheDocument();
  });
});
