import { fireEvent, render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import App from './App';

it('dismisses the alert', async () => {
  render(<App />);

  const alert = screen.getByRole('alert');
  fireEvent.click(within(alert).getByLabelText('Close'));

  await waitForElementToBeRemoved(alert);
});
