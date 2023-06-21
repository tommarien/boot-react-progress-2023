import { useEffect } from 'react';
import { isAbortError } from './utils/fetcher';
import { list } from './services/userApiClient';

function App() {
  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      const users = await list(
        { pageSize: 4 },
        {
          signal: controller.signal,
        },
      );

      console.log(users);
    };

    fetchUsers().catch((err) => {
      if (isAbortError(err)) {
        console.log('aborted');
        return;
      }
      console.log(err);
    });

    return () => controller.abort();
  }, []);

  return null;
}

export default App;
