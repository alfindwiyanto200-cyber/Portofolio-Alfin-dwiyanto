import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TransitionCurtain({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [animationClass, setAnimationClass] = useState('slide-out');
  const [pendingRoute, setPendingRoute] = useState(null);

  // Hook into all anchor tags dynamically or handle routing programmatically
  // In a real app with framer motion this is easier, but here we replicate the CSS transitions.

  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && !link.href.includes('#') && link.origin === window.location.origin) {
        e.preventDefault();
        const url = new URL(link.href);
        const path = url.pathname + url.search;
        
        if (path !== location.pathname + location.search) {
          setTitle(link.innerText.trim() || 'Loading');
          setAnimationClass('slide-in-active');
          setPendingRoute(path);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
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
