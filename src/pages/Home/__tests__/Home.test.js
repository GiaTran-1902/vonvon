import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { render, screen } from 'utils/test-utils';

import Home from '../Home';

let user;
beforeEach(async () => {
  user = userEvent.setup();
  await act(async () => render(<Home />));
});

describe('<Home />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Home />));

    expect(container).toBeInTheDocument();
  });
});

describe('Calculator', () => {
  it('renders a calculator', () => {
    // check if all components are rendered
    expect(screen.getByTestId('result')).toBeInTheDocument();
    expect(screen.getByTestId('num1')).toBeInTheDocument();
    expect(screen.getByTestId('num2')).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();
    expect(screen.getByTestId('subtract')).toBeInTheDocument();
    expect(screen.getByTestId('multiply')).toBeInTheDocument();
    expect(screen.getByTestId('divide')).toBeInTheDocument();
  });
  it('adds numbers', async () => {
    // check if adds properly
    const num1input = screen.getByTestId('num1');
    const num2input = screen.getByTestId('num2');
    const addButton = screen.getByTestId('add');
    const resultArea = screen.getByTestId('result');
    await user.type(num1input, '5');
    await user.type(num2input, '8');
    await user.click(addButton);
    expect(resultArea).toHaveTextContent('13');
  });
  it('subtracts numbers', async () => {
    // check if adds properly
    const num1input = screen.getByTestId('num1');
    const num2input = screen.getByTestId('num2');
    const subtractButton = screen.getByTestId('subtract');
    const resultArea = screen.getByTestId('result');
    await user.type(num1input, '8');
    await user.type(num2input, '5');
    await user.click(subtractButton);
    expect(resultArea).toHaveTextContent('3');
  });
  it('multiplies numbers', async () => {
    // check if adds properly
    const num1input = screen.getByTestId('num1');
    const num2input = screen.getByTestId('num2');
    const multiplyButton = screen.getByTestId('multiply');
    const resultArea = screen.getByTestId('result');
    await user.type(num1input, '8');
    await user.type(num2input, '5');
    await user.click(multiplyButton);
    expect(resultArea).toHaveTextContent('40');
  });
  it('divides numbers', async () => {
    // check if adds properly
    const num1input = screen.getByTestId('num1');
    const num2input = screen.getByTestId('num2');
    const divideButton = screen.getByTestId('divide');
    const resultArea = screen.getByTestId('result');
    await user.type(num1input, '20');
    await user.type(num2input, '2');
    await user.click(divideButton);
    expect(resultArea).toHaveTextContent('10');
  });
});
