import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Garden heading', () => {
  render(<App />);
  expect(screen.getByText(/UI Garden Component Library/i)).toBeInTheDocument();
});