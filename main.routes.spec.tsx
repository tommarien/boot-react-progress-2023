import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import createRoutes from './createRoutes';

it('renders home by default', async () => {
  render(<RouterProvider router={createMemoryRouter(createRoutes())} />);

  screen.getByText('Home');
});

it('renders products if on /products', () => {
  render(<RouterProvider router={createMemoryRouter(createRoutes(), { initialEntries: ['/products'] })} />);

  screen.getByText('Products');
});
