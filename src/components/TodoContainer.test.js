import React from 'react';
import { render } from '@testing-library/react';
import TodoContainer from './TodoContainer';

test('renders text: in the', () => {
  const { getByText } = render(<TodoContainer />);
  const element = getByText(/Setup development environment/i);
  expect(element).toBeInTheDocument();
});
