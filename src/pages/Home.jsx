import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useRef } from 'react';

export default function Home() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      const speed = 0.2;
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${scrollPos * speed}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(-${scrollPos * speed}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      {/* Intro Section */}
      <section className="pt-20 md:pt-40 px-8 pb-32 md:pb-48 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="w-full md:w-2/3 mb-12 md:mb-0">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-normal tracking-tight leading-[1.1] mb-8 reveal active">
            Helping brands thrive in the digital world
          </h1>
        </div>
        <div className="w-full md:w-1/3 flex justify-start md:justify-end reveal active fade-right">
          <a className="circle-btn w-40 h-40 md:w-48 md:h-48 bg-dennis-blue rounded-full flex items-center justify-center text-white text-lg font-medium" href="#">
            About me
          </a>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="bg-white" data-purpose="work-list" id="work">
        <div className="px-8 mb-12">
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">Recent Work</p>
        </div>
        <div className="border-t border-zinc-200">
          <Link className="group block border-b border-zinc-200 hover:px-12 transition-all duration-500 py-12 px-8 reveal active" to="/project?id=twice">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <h3 className="text-6xl md:text-8xl font-normal group-hover:text-zinc-400 transition-colors">TWICE</h3>
              <span className="text-lg text-dennis-dark">Interaction & Development</span>
            </div>
          </Link>
          <Link className="group block border-b border-zinc-200 hover:px-12 transition-all duration-500 py-12 px-8 reveal active" to="/project?id=damai">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <h3 className="text-6xl md:text-8xl font-normal group-hover:text-zinc-400 transition-colors">The Damai</h3>
              <span className="text-lg text-dennis-dark">Design & Development</span>
            </div>
          </Link>
          <Link className="group block border-b border-zinc-200 hover:px-12 transition-all duration-500 py-12 px-8 reveal active" to="/project?id=fabric">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <h3 className="text-6xl md:text-8xl font-normal group-hover:text-zinc-400 transition-colors">FABRIC™</h3>
              <span className="text-lg text-dennis-dark">Design & Development</span>
            </div>
          </Link>
        </div>
        <div className="flex justify-center py-24">
          <Link className="px-12 py-6 border border-zinc-300 rounded-full text-lg hover:bg-dennis-dark hover:text-white transition-colors relative" to="/work">
            More work <sup className="text-xs opacity-60">11</sup>
          </Link>
        </div>
      </section>

      {/* Curve Transition */}
      <div className="relative w-full h-12 md:h-24 bg-dennis-dark">
        <div className="absolute top-0 left-0 w-full h-full bg-white" style={{borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%'}}></div>
      </div>
    </>
  );
}
