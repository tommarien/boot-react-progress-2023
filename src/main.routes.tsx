import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Logout from './pages/Logout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
