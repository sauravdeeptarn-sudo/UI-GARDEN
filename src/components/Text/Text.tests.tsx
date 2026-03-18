import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

test('Text is visible', () => {
  render(<Text text="Hello world" />);
  expect(screen.getByText('Hello world')).toBeInTheDocument();
});

test('Text color changes when disabled', () => {
  const { container } = render(<Text text="Hello" disabled />);
  const text = container.firstChild;
  expect(text).toHaveStyleRule('color', '#999');
});
