import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { PROJECT_DATA } from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  useScrollReveal();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const data = PROJECT_DATA[id];
    
    if (data) {
      setProject(data);
    } else {
      navigate('/work');
    }
  }, [location, navigate]);

  if (!project) return null;

  return (
    <>
      <Header />
      <div className="w-full pt-10 md:pt-20 px-8 md:px-20 lg:px-32 mb-16 md:mb-32 relative z-10">
        <h1 className="text-6xl md:text-[9rem] leading-[1.05] font-normal tracking-tight w-full reveal">
          {project.title}
        </h1>
      </div>

      <div className="w-full px-8 md:px-20 lg:px-32 mb-24 md:mb-32 relative z-10 reveal fade-right">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="border-t border-zinc-300 pt-6">
            <p className="uppercase text-[10px] md:text-xs font-semibold tracking-widest text-zinc-400 mb-6">ROLE / SERVICES</p>
            <p className="text-base md:text-lg font-medium">{project.role}</p>
          </div>
          <div className="border-t border-zinc-300 pt-6">
            <p className="uppercase text-[10px] md:text-xs font-semibold tracking-widest text-zinc-400 mb-6">CREDITS</p>
            <p className="text-base md:text-lg font-medium">{project.credits}</p>
          </div>
          <div className="border-t border-zinc-300 pt-6">
            <p className="uppercase text-[10px] md:text-xs font-semibold tracking-widest text-zinc-400 mb-6">LOCATION & YEAR</p>
            <p className="text-base md:text-lg font-medium">{project.locationYear}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-10">
        <div className="absolute top-0 left-[75%] md:left-[80%] -translate-x-1/2 -translate-y-1/2 z-20 reveal">
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="circle-btn w-28 h-28 md:w-40 md:h-40 bg-dennis-blue rounded-full flex flex-col items-center justify-center text-white text-base md:text-lg font-medium shadow-2xl hover:scale-110 transition-transform">
            <span>Live site</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-1 transform rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 19L19 5M19 5H5M19 5V19"></path>
            </svg>
          </a>
        </div>

        <div className="w-full bg-[#cbd0cd] py-24 md:py-40 px-4 md:px-12 lg:px-24 flex flex-col gap-12 items-center min-h-[50vh]">
          {project.images.map((img, i) => (
            <div key={i} className="w-full mb-12 last:mb-0 reveal">
              <img src={img} className="w-full h-auto max-h-[80vh] object-cover rounded-lg" alt={`${project.title} screenshot ${i}`} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Curve Transition adapted for gray background */}
      <div className="relative w-full h-12 md:h-24 bg-dennis-dark mt-[-1px]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#cbd0cd]" style={{borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%'}}></div>
      </div>
    </>
  );
}
