import { useState } from 'react';
import { Alert } from './components/Alert';

function App() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      <h1>Hello, bootcampers</h1>

      <div className="main container-fluid">
        <div className="container-fluid">
          <h2>Alerts</h2>

          <Alert>This is by default a warning</Alert>
          <Alert variant="info">This is an informational alert</Alert>
          <Alert variant="danger">
            <strong>Oops,</strong> something bad happened
          </Alert>
          <Alert heading={<em>Nice</em>}>This time with a header!</Alert>
          <Alert className="extra-class">Warning with added class</Alert>
          {!dismissed && (
            <Alert onDismissed={() => setDismissed(true)}>
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
          )}
          <hr />
        </div>
      </div>
    </>
  );
}

export default App;
