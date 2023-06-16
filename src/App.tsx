import { useState } from 'react';
import { Alert } from './components/Alert';
import { Badge } from './components/Badge';

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
        <div className="container-fluid">
          <h2>Badges</h2>
          <Badge variant="primary">Primary</Badge> <Badge>Secondary</Badge> <Badge variant="success">Success</Badge>{' '}
          <Badge variant="danger">Danger</Badge> <Badge variant="warning">Warning</Badge>{' '}
          <Badge variant="info">Info</Badge> <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
          <hr />
          <h2>Pill Badges</h2>
          <Badge variant="primary" pill>
            Primary
          </Badge>{' '}
          <Badge pill>Secondary</Badge>{' '}
          <Badge variant="success" pill>
            Success
          </Badge>{' '}
          <Badge variant="danger" pill>
            Danger
          </Badge>{' '}
          <Badge variant="warning" pill>
            Warning
          </Badge>{' '}
          <Badge variant="info" pill>
            Info
          </Badge>{' '}
          <Badge variant="light" pill>
            Light
          </Badge>{' '}
          <Badge variant="dark" pill>
            Dark
          </Badge>
        </div>
      </div>
    </>
  );
}

export default App;
