import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Header from '../PrimaryHeader';

describe('<Header />', () => {
  test('it should mount', async () => {
    const { container } = await act(async () => render(<Header />));

    expect(container).toBeInTheDocument();
  });
});
