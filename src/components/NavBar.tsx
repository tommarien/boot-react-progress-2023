import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={reactLogo} alt="Bootcamp Logo" width="24" height="24" className="d-inline-block align-text-top" />{' '}
          Bootcamp
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
