function StatusMessage({ children, variant = 'normal' }) {
  const className = variant === 'error' ? 'status-message status-message-error' : 'status-message';

  return <p className={className}>{children}</p>;
}

export default StatusMessage;
