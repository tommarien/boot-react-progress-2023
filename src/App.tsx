import { useEffect } from 'react';
import { fetcher, isAbortError } from './utils/fetcher';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

function App() {
  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      const users = await fetcher<User[]>(`http://localhost:8080/api/users?_page=1`, {
        signal: controller.signal,
      });

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
