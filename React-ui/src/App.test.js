import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile directory heading', () => {
  render(<App />);
  expect(screen.getByText('プロフィールカード一覧')).toBeInTheDocument();
});
