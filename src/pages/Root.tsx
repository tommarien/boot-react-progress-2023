import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Root = () => {
  return (
    <>
      <NavBar data-testid="navbar" />
      <Outlet />
    </>
  );
};

export default Root;
