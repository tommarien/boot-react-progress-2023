import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const dismissAlert = () => {
    setTimeout(() => {
      setDismissed(true);
    }, 0);
  };

  return (
    <Alert variant="info" onDismiss={dismissAlert}>
      I am here but i dismiss with a delay
    </Alert>
  );
}

export default App;
