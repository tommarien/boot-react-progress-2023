import { useContext } from 'react';
import { IdentityContext } from '../contexts/IdentityContext';
import Button from '../components/Button';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { currentIdentity, setCurrentIdentity } = useContext(IdentityContext);

  if (currentIdentity) return <Navigate to="/" />;

  return (
    <>
      <h1>Login</h1>
      <Button variant="primary" type="button" onClick={() => setCurrentIdentity('admin')}>
        Authenticate
      </Button>
    </>
  );
};

export default Login;
