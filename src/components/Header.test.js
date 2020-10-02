import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders text: anything', () => {
  const { getByText } = render(<Header />);
  const element = getByText(/Simple dodo App/i);
  expect(element).toBeInTheDocument();
});