import { FC } from 'react';
import { clsx } from 'clsx';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  heading?: React.ReactNode;
  onDismissed?: () => void;
  variant?: 'info' | 'warning' | 'danger';
}

const BASE_CLASS_NAME = 'alert';

export const Alert: FC<AlertProps> = ({ children, className, heading, onDismissed, variant = 'warning' }) => (
  <div
    className={clsx(
      BASE_CLASS_NAME,
      `${BASE_CLASS_NAME}-${variant}`,
      className,
      onDismissed && `${BASE_CLASS_NAME}-dismissible`,
    )}
    role="alert"
  >
    {heading && <h4 className={`${BASE_CLASS_NAME}-heading`}>{heading}</h4>}
    {children}
    {onDismissed && <button type="button" className="btn-close" aria-label="Close" onClick={onDismissed} />}
  </div>
);
