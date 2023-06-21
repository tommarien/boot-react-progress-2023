import { FC, ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
}

const Alert: FC<AlertProps> = ({ children }) => <div role="alert">{children}</div>;

export default Alert;
