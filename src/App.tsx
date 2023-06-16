import { useEffect, useState } from 'react';
import { Alert } from './components/Alert';

function App() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const timeout = setTimeout(() => {
      console.log('Auto Dismiss');
      setDismissed(true);
    }, 2000);

    return () => {
      console.log('Auto Dismiss cleanup');
      clearTimeout(timeout);
    };
  }, [dismissed, setDismissed]);

  return (
    <>
      <h1>Hello, bootcampers</h1>

      <h2>Self dismissing Alert</h2>

      {!dismissed && (
        <Alert variant="info" onDismissed={() => setDismissed(true)}>
          This message will selfdestruct in 2 seconds!
        </Alert>
      )}
    </>
  );
}

export default App;
