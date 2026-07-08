import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isWork = location.pathname.includes('/work');
  const isAbout = location.pathname.includes('/about');

  return (
    <header className="flex justify-between items-center z-10 pb-16 md:pb-24 px-8 md:px-20 lg:px-32 pt-8">
      <div className="text-dennis-dark text-lg font-medium">
        <Link to="/">© Code by Alfin dwiyanto</Link>
      </div>
      <nav className="hidden md:flex gap-8 text-dennis-dark text-base font-medium items-center">
        <div className="flex flex-col items-center relative">
          <Link className="hover:opacity-70 transition-opacity" to="/work">Work</Link>
          {isWork && <span className="w-1.5 h-1.5 bg-dennis-dark rounded-full absolute -bottom-2"></span>}
        </div>
        <div className="flex flex-col items-center relative">
          <Link className="hover:opacity-70 transition-opacity" to="/#about">About</Link>
          {isAbout && <span className="w-1.5 h-1.5 bg-dennis-dark rounded-full absolute -bottom-2"></span>}
        </div>
        <Link className="hover:opacity-70 transition-opacity" to="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
