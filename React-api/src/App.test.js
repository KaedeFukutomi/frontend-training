import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'leanne@example.com',
            company: { name: 'Romaguera-Crona' },
          },
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders user directory heading', async () => {
  render(<App />);

  expect(screen.getByText('ユーザー一覧')).toBeInTheDocument();
  expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
});
