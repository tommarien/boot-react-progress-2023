import { HttpStatusError } from './http-status-error';

export async function fetcher<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const error = new HttpStatusError(res.status, res.statusText, res.headers);
    if (res.headers.get('content-type')?.includes('application/json')) {
      error.data = await res.json();
    }

    throw error;
  }

  const data = await res.json();
  return data;
}

export function isAbortError(err: unknown): boolean {
  return err instanceof DOMException && err.name === 'AbortError';
}
