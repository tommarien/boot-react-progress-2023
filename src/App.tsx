import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [alertShown, setAlertVisible] = useState(true);
  return (
    <>
      <h1>Welcome</h1>
      {alertShown && (
        <Alert heading={<strong>Oops</strong>} onDismiss={() => setAlertVisible(false)}>
          Something weird happened
        </Alert>
      )}
    </>
  );
}

export default App;
