import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function TransitionLink({ to, className, children, title, ...props }) {
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    
    // Resolve URL to absolute path
    const urlObj = new URL(to, window.location.origin);
    const path = urlObj.pathname + urlObj.search;

    // Only trigger transition if navigating to a different page
    if (path !== location.pathname + location.search) {
      window.dispatchEvent(
        new CustomEvent('trigger-transition', {
          detail: { url: to, title: title || 'Loading' },
        })
      );
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
