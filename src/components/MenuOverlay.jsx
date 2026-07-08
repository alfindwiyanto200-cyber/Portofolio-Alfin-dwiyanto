import { useState, useEffect } from 'react';
import TransitionLink from './TransitionLink';

export default function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    window.addEventListener('open-menu', openMenu);
    window.addEventListener('trigger-transition', closeMenu);

    return () => {
      window.removeEventListener('open-menu', openMenu);
      window.removeEventListener('trigger-transition', closeMenu);
    };
  }, []);

  return (
    <>
      {/* Dark overlay backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[99] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Slide-in menu panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-dennis-dark text-white z-[100] transform transition-transform duration-700 cubic-bezier(0.7, 0, 0.3, 1) flex flex-col justify-between p-12 md:p-20 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 bg-dennis-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div>
          <p className="text-[10px] md:text-xs text-zinc-400 font-semibold tracking-widest uppercase mb-10 border-b border-zinc-600 pb-4">Navigation</p>
          <nav className="flex flex-col gap-4 text-4xl md:text-6xl font-normal tracking-tight">
            <TransitionLink to="/" className="hover:text-dennis-blue transition-colors relative group">
              Home
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </TransitionLink>
            <TransitionLink to="/work" className="hover:text-dennis-blue transition-colors relative group">
              Work
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </TransitionLink>
            <TransitionLink to="/#about" className="hover:text-dennis-blue transition-colors relative group">
              About
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </TransitionLink>
            <TransitionLink to="/#contact" className="hover:text-dennis-blue transition-colors relative group">
              Contact
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </TransitionLink>
          </nav>
        </div>

        <div>
          <p className="text-[10px] md:text-xs text-zinc-400 font-semibold tracking-widest uppercase mb-6">Socials</p>
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium">
            <a href="#" className="hover:opacity-70 transition-opacity">Awwwards</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
}
