import { useState } from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';

const Thinghy = () => {
  useDocumentTitle('Hello!', true);
  return <div>I am here</div>;
};

function App() {
  const [hide, setHide] = useState(false);
  return (
    <>
      <h1>Hello, bootcampers</h1>

      {!hide && <Thinghy />}

      <button className="btn btn-secondary" onClick={() => setHide(true)}>
        Click here to restore title
      </button>
    </>
  );
}

export default App;
