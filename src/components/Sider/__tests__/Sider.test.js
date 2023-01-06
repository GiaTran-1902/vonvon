import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Sider from '../Sider';

describe('<Sider />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Sider />));

    expect(container).toBeInTheDocument();
  });
});
