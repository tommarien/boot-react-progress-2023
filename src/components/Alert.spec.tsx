import { render, screen } from '@testing-library/react';
import Alert from './Alert';

it('renders an alert', () => {
  const { rerender } = render(<Alert>My message</Alert>);

  const alert = screen.getByRole('alert');
  screen.debug(alert); // 🖨️ <div role="alert">My Message</div>

  rerender(<Alert>💪</Alert>);
  screen.debug(alert); // 🖨️ <div role="alert">M💪</div>
});
