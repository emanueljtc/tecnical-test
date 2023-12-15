import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import jest from 'jest-mock';
import Button from '..';


const mock = jest.fn();

describe('Button', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('applies correct buttonClassNames when isLoading is false', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toHaveClass(
      'p-2 bg-amber-400 rounded-md mt-2 hover:bg-purple-400 cursor-pointer'
    );
  });

  it('applies correct buttonClassNames when isLoading is true', () => {
    const { container } = render(<Button isLoading />);
    expect(container.firstChild).toHaveClass(
      'p-2 bg-amber-400 rounded-md mt-2 hover:bg-gray-400 cursor-not-allowed'
    );
  });

  it('calls onClick callback when button is clicked', () => {
    const handleClick = mock;
    const { container } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    fireEvent.click(container.firstChild);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when isLoading is true', () => {
    const { container } = render(<Button isLoading />);
    expect(container.firstChild).toBeDisabled();
  });

  // Add more test cases as needed
});
