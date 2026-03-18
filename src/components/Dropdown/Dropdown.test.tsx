import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

test('Dropdown renders options', () => {
  render(
    <Dropdown
      options={[
        { label: 'One', value: '1' },
        { label: 'Two', value: '2' },
      ]}
    />,
  );

  expect(screen.getByText('One')).toBeInTheDocument();
  expect(screen.getByText('Two')).toBeInTheDocument();
});

test('Dropdown applies disabled style', () => {
  const { container } = render(
    <Dropdown disabled options={[{ label: 'One', value: '1' }]} />,
  );

  expect(container.firstChild).toHaveStyleRule('opacity', '0.5');
});
