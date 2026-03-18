import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Radio } from './Radio';

test('Radio renders with label', () => {
  render(<Radio label="Test Radio" />);
  expect(screen.getByText('Test Radio')).toBeInTheDocument();
});

test('Radio applies disabled style', () => {
  const { container } = render(<Radio label="Test" disabled />);
  expect(container.firstChild).toHaveStyleRule('opacity', '0.5');
});
