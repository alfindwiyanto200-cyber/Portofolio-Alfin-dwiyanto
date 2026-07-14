import { useLocation } from 'react-router-dom';
import TransitionLink from './TransitionLink';

export default function Header() {
  const location = useLocation();
  const isWork = location.pathname.includes('/work');
  const isAbout = location.pathname.includes('/about');

  return (
    <header className="flex justify-between items-center z-10 pb-16 md:pb-24 px-8 md:px-20 lg:px-32 pt-8">
      <div className="text-dennis-dark text-lg font-medium">
        <TransitionLink to="/">© Code by Alfin dwiyanto</TransitionLink>
      </div>
      <nav className="hidden md:flex gap-8 text-dennis-dark text-base font-medium items-center">
        <div className="flex flex-col items-center relative">
          <TransitionLink className="hover:opacity-70 transition-opacity" to="/work">Work</TransitionLink>
          {isWork && <span className="w-1.5 h-1.5 bg-dennis-dark rounded-full absolute -bottom-2"></span>}
        </div>
        <div className="flex flex-col items-center relative">
          <TransitionLink className="hover:opacity-70 transition-opacity" to="/about">About</TransitionLink>
          {isAbout && <span className="w-1.5 h-1.5 bg-dennis-dark rounded-full absolute -bottom-2"></span>}
        </div>
        <TransitionLink className="hover:opacity-70 transition-opacity" to="/#contact">Contact</TransitionLink>
      </nav>
    </header>
  );
}
