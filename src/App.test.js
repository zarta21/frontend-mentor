import { render, screen } from '@testing-library/react';
import App from './App';

test('Card element renders successfully', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tautvydas/i);
  expect(linkElement).toBeInTheDocument();
});
