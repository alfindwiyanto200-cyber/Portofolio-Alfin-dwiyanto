import { useEffect, useState } from 'react';

export default function StickyMenuButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`menu-button ${isVisible ? 'visible' : ''}`} data-purpose="sticky-menu">
      <button 
        onClick={() => window.dispatchEvent(new Event('open-menu'))}
        className="w-16 h-16 md:w-20 md:h-20 bg-dennis-dark rounded-full flex flex-col items-center justify-center gap-1.5 shadow-xl group"
      >
        <span className="w-6 md:w-8 h-[2px] bg-white transition-all group-hover:w-4"></span>
        <span className="w-6 md:w-8 h-[2px] bg-white transition-all group-hover:w-6"></span>
      </button>
    </div>
  );
}
