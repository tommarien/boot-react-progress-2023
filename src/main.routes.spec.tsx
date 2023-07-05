import { fireEvent, render, screen, within } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './main.routes';

jest.mock('./pages/Login.tsx', () => () => <div data-testid="fake-login-component" />);

it('renders home by default', () => {
  render(<RouterProvider router={createMemoryRouter(routes)} />);

  screen.getByText('Home');
});

it('renders our navbar component', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/navbar'] });
  render(<RouterProvider router={router} />);

  const nav = screen.getByRole('navigation');
  expect(nav).toHaveClass('navbar', 'navbar-light', 'bg-light');

  const brandLink = screen.getByText('Bootcamp');
  expect(brandLink).toHaveProperty('tagName', 'A');

  const brandImage = within(brandLink).getByAltText('Bootcamp Logo');
  expect(brandImage).toHaveAttribute('src', 'assets/react.svg');

  // Navigates to home when clicked
  fireEvent.click(brandLink);
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
