import { useState } from 'react';
import TransitionLink from '../components/TransitionLink';
import Header from '../components/Header';
import useScrollReveal from '../hooks/useScrollReveal';
import { PROJECT_DATA } from '../data/projects';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  useScrollReveal([activeFilter]);

  const workItems = [
    { id: 'serasasejiwa', location: 'Indonesia', year: '2025' },
    { id: 'hithat',             location: 'Bandung, Indonesia', year: '2026' },
    { id: 'rujack',             location: 'Garut, Indonesia',   year: '2026' },
    { id: 'diameter-coffee',    location: 'Bandung, Indonesia', year: '2026' },
    { id: 'bakmi-ponyo',        location: 'Bandung, Indonesia', year: '2026' },
    { id: 'jaket-kulit-garut',  location: 'Garut, Indonesia',   year: '2026' },
    { id: 'bittersweet',        location: 'Bandung, Indonesia', year: '2026' },
    { id: 'warung-katenjo',     location: 'Garut, Indonesia',   year: '2026' },
    { id: 'machain',            location: 'Indonesia', year: '2023' },
    { id: 'twice',              location: 'Spain',     year: '2024' },
    { id: 'aanstekelijk',       location: 'Netherlands', year: '2023' },
    { id: 'base-create',        location: 'Hong Kong', year: '2023' },
    { id: 'avvr',               location: 'Netherlands', year: '2023' },
  ];

  const designCount = workItems.filter(({ id }) => PROJECT_DATA[id]?.category === 'design').length;
  const fotoCount   = workItems.filter(({ id }) => PROJECT_DATA[id]?.category === 'foto-produk').length;

  const filtered = workItems.filter(({ id }) => {
    if (activeFilter === 'all') return true;
    return PROJECT_DATA[id]?.category === activeFilter;
  });

  return (
    <>
      <Header />
      <div className="w-full pt-4 md:pt-10 mb-12 px-8 md:px-20 lg:px-32">
        <h1 className="text-6xl md:text-[8rem] leading-[1.05] font-normal tracking-tight w-full reveal">
          Creating next level<br className="hidden md:block" /> digital products
        </h1>
      </div>

      <div className="w-full px-8 md:px-20 lg:px-32 flex flex-col md:flex-row justify-between items-center gap-8 mb-20 reveal fade-right">
        <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center md:justify-start">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-8 md:px-10 py-3 md:py-4 rounded-[3rem] text-sm md:text-base transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-dennis-dark text-white'
                : 'bg-white text-dennis-dark border border-zinc-200 hover:border-zinc-400'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('design')}
            className={`px-8 md:px-10 py-3 md:py-4 rounded-[3rem] text-sm md:text-base transition-all duration-300 ${
              activeFilter === 'design'
                ? 'bg-dennis-dark text-white'
                : 'bg-white text-dennis-dark border border-zinc-200 hover:border-zinc-400'
            }`}
          >
            Design <sup className="text-[10px] ml-1 opacity-60">{designCount}</sup>
          </button>
          <button
            onClick={() => setActiveFilter('foto-produk')}
            className={`px-8 md:px-10 py-3 md:py-4 rounded-[3rem] text-sm md:text-base transition-all duration-300 ${
              activeFilter === 'foto-produk'
                ? 'bg-dennis-dark text-white'
                : 'bg-white text-dennis-dark border border-zinc-200 hover:border-zinc-400'
            }`}
          >
            Foto Produk <sup className="text-[10px] ml-1 opacity-60">{fotoCount}</sup>
          </button>
        </div>
      </div>

      <div className="w-full px-8 md:px-20 lg:px-32 flex flex-col gap-8 text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest font-semibold border-b border-zinc-300 pb-6 reveal">
        <div className="grid grid-cols-12 px-4 md:px-8">
          <div className="col-span-12 md:col-span-5">Client</div>
          <div className="col-span-12 md:col-span-3 hidden md:block">Location</div>
          <div className="col-span-12 md:col-span-3 hidden md:block">Services</div>
          <div className="col-span-12 md:col-span-1 text-right hidden md:block">Year</div>
        </div>
      </div>

      <div className="flex flex-col w-full px-8 md:px-20 lg:px-32">
        {filtered.map(({ id, location, year }) => {
          const project = PROJECT_DATA[id];
          if (!project) return null;
          return (
            <TransitionLink key={id} to={`/project?id=${id}`} className="group grid grid-cols-12 px-4 md:px-8 py-8 md:py-12 border-b border-zinc-200 items-center hover:bg-zinc-50 transition-colors reveal">
              <div className="col-span-12 md:col-span-5 mb-4 md:mb-0 text-4xl md:text-[3.25rem] font-normal md:group-hover:translate-x-6 transition-transform duration-500">{project.title}</div>
              <div className="col-span-12 md:col-span-3 text-base md:text-lg text-zinc-600 md:text-dennis-dark">{location}</div>
              <div className="col-span-12 md:col-span-3 text-base md:text-lg text-zinc-600 md:text-dennis-dark">{project.role}</div>
              <div className="col-span-12 md:col-span-1 text-base md:text-lg text-zinc-500 md:text-right hidden md:block">{year}</div>
            </TransitionLink>
          );
        })}
      </div>
      
      {/* Curve Transition */}
      <div className="relative w-full h-12 md:h-24 bg-dennis-dark mt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-white" style={{borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%'}}></div>
      </div>
    </>
  );
}
