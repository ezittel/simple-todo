import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem';

test('renders text: anything', () => {
  const { getByText } = render(<li />);
  //console.log({getByText})
  //const element = getByText('Develop website and add content');
  //expect({ getByText }).toBeInTheDocument();
});