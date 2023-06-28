import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  variant?: 'info' | 'warning' | 'danger';
  heading?: ReactNode;
  className?: string;
}

const BOOTSTRAP_PREFIX = 'alert';

const Alert: FC<AlertProps> = ({ children, variant = 'warning', heading, className }) => (
  <div role="alert" className={clsx(BOOTSTRAP_PREFIX, `${BOOTSTRAP_PREFIX}-${variant}`, className)}>
    {heading && <h4 className={`${BOOTSTRAP_PREFIX}-heading`}>{heading}</h4>}
    {children}
  </div>
);

export default Alert;
