import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('shows the right text', () => {
  const { getByText } = render(<App />);
  const textDisplayed = getByText(/barf/i);
  expect(textDisplayed).toBeInTheDocument();
});
