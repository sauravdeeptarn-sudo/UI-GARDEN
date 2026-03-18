import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Image } from './Image';

test('Image renders correctly', () => {
  render(<Image src="test.jpg" alt="Test Image" />);
  expect(screen.getByAltText('Test Image')).toBeInTheDocument();
});

test('Image applies disabled style', () => {
  const { container } = render(
    <Image src="test.jpg" alt="Test Image" disabled />,
  );
  const img = container.querySelector('img');
  expect(img).toHaveStyleRule('opacity', '0.5');
});
