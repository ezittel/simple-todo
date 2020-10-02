import React from 'react';
import { render } from '@testing-library/react';
import TodosList from './TodosList';

test('renders text: anything', () => {
  const { getByText } = render(<div />);
  //const element = getByText(/Develop website and add content/i);
  //expect(element).toBeInTheDocument();
});