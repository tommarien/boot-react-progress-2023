import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './main.routes';

jest.mock('./pages/Login.tsx', () => () => <div data-testid="fake-login-component" />);

it('renders home by default', () => {
  render(<RouterProvider router={createMemoryRouter(routes)} />);

  screen.getByText('Home');
});

it('renders login if path is /login', () => {
  render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: ['/login'] })} />);

  screen.getByTestId('fake-login-component');
});

it('renders notFound if path is anything else', () => {
  render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: ['/anything-else'] })} />);

  screen.getByText('Not Found');
});
