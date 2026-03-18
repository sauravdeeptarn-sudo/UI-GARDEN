import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

test('Card is visible', () => {
  render(<Card title="Test Card" content="Hello" />);
  expect(screen.getByText('Test Card')).toBeInTheDocument();
});

test('Card background changes when disabled', () => {
  const { container } = render(<Card disabled />);
  const card = container.firstChild;
  expect(card).toHaveStyleRule('background', '#e0e0e0');
});
