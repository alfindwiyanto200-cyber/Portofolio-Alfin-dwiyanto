import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TransitionCurtain({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [animationClass, setAnimationClass] = useState('');
  const [pendingRoute, setPendingRoute] = useState(null);

  // Hook into all anchor tags dynamically or handle routing programmatically
  // In a real app with framer motion this is easier, but here we replicate the CSS transitions.

  useEffect(() => {
    const handleTransitionEvent = (e) => {
      const { url, title } = e.detail;
      const urlObj = new URL(url, window.location.origin);
      const path = urlObj.pathname + urlObj.search;
      
      if (path !== location.pathname + location.search) {
        setTitle(title || 'Loading');
        setAnimationClass('slide-in-active');
        setPendingRoute(path);
      }
    };

    window.addEventListener('trigger-transition', handleTransitionEvent);
    return () => window.removeEventListener('trigger-transition', handleTransitionEvent);
  }, [location]);

  useEffect(() => {
    if (pendingRoute && animationClass === 'slide-in-active') {
      const timer = setTimeout(() => {
        navigate(pendingRoute);
        setPendingRoute(null);
      }, 1000); // 1s delay for transition
      return () => clearTimeout(timer);
    }
  }, [pendingRoute, animationClass, navigate]);

  useEffect(() => {
    // When location actually changes, slide out!
    if (animationClass === 'slide-in-active') {
      setAnimationClass('slide-out-active');
    }
  }, [location.pathname, location.search]);

  return (
    <>
      <div className={`page-transition ${animationClass}`} id="page-transition">
        <div className="page-transition-text">
          <div className="dot"></div>
          <span>{title}</span>
        </div>
      </div>
      {children}
    </>
  );
}
