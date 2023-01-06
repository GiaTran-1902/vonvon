import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Layout from '../PrimaryLayout';

describe('<Layout />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Layout />));

    expect(container).toBeInTheDocument();
  });
});
