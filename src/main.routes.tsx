import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
