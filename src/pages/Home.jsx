import TransitionLink from '../components/TransitionLink';
import Header from '../components/Header';
import { useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Home() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  useScrollReveal();

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
      {/* Hero Section */}
      <section className="relative min-h-screen bg-dennis-grey flex flex-col justify-between overflow-hidden" data-purpose="hero-section" id="hero">
        <Header />
        
        <div className="absolute bottom-0 md:-bottom-12 left-0 w-full z-10 flex justify-center pointer-events-none">
          <div className="reveal">
            <img 
              alt="Dennis Snellenberg" 
              className="w-96 md:w-[60rem] max-w-none max-h-[90vh] h-auto object-contain pointer-events-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr4KIOp3lEosOj1h_CLDoo6WJ7wMyT8FjqlAzY4Wrc-R2h4IxhQmXNyTH0_qbGTXiSTAx2iQ8c6yHsBMyqN2F9CRqQNIq30JoxQ60HRCuoQe1Hh5aHag86aNbgkZDdrbTuh2hQG5zmkNYOmCaftQL6aJO4-xhTwadW0-_yW9wAoRt4ExEGxumKBVm2ZWt5nhHeidStHB93BnlzkJopDI-TpD50ejVfNlrAh5D2i_l6BCqZiApHlHs0Jg9ltnGMJcmx7g" 
            />
          </div>
        </div>
        
        <div className="absolute right-8 md:right-12 top-32 md:top-48 text-right z-10 reveal fade-right">
          <div className="flex flex-col gap-1">
            <span className="text-white text-xl md:text-3xl font-normal leading-tight">Freelance</span>
            <span className="text-white text-xl md:text-3xl font-normal leading-tight">Designer & Developer</span>
          </div>
        </div>

        {/* Marquee Footer */}
        <div className="marquee-container bg-transparent pb-10 z-10 pointer-events-none mt-auto">
          <div className="marquee-content flex">
            <span className="massive-text text-white font-medium pr-20">— Alfin Dwiyanto — Portfolio —</span>
            <span className="massive-text text-white font-medium pr-20">— Alfin Dwiyanto — Portfolio —</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 md:py-60 px-8 bg-white" data-purpose="intro-about" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8 reveal fade-left">
            <h2 className="text-3xl md:text-5xl leading-tight font-normal text-dennis-dark">
              Berbekal pengalaman di bidang digital marketing, desain grafis, dan fotografi produk, saya memadukan estetika visual dengan keahlian web coding untuk menciptakan kehadiran digital yang utuh bagi bisnis Anda.
            </h2>
          </div>
          <div className="md:col-span-4 reveal fade-right">
            <p className="text-lg text-zinc-600 mb-12">
              Membantu brand Anda tampil menonjol di era digital. Membangun identitas yang kuat, dari visual hingga pengalaman website.
            </p>
            <div className="flex">
              <a className="circle-btn w-40 h-40 md:w-48 md:h-48 bg-dennis-blue rounded-full flex items-center justify-center text-white text-lg font-medium" href="#">
                About me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="bg-white" data-purpose="work-list" id="work">
        <div className="px-8 mb-12">
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">Recent Work</p>
        </div>
        <div className="border-t border-zinc-200">
          <TransitionLink className="group block border-b border-zinc-200 hover:px-12 transition-all duration-500 py-12 px-8 reveal" to="/project?id=serasasejiwa">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <h3 className="text-6xl md:text-8xl font-normal group-hover:text-zinc-400 transition-colors">SERASASEJIWA</h3>
              <span className="text-lg text-dennis-dark">BRAND IDENTITY & Development</span>
            </div>
          </TransitionLink>
          <TransitionLink className="group block border-b border-zinc-200 hover:px-12 transition-all duration-500 py-12 px-8 reveal" to="/project?id=hithat">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <h3 className="text-6xl md:text-8xl font-normal group-hover:text-zinc-400 transition-colors">HITHAT</h3>
              <span className="text-lg text-dennis-dark">BRAND IDENTITY & Design</span>
            </div>
          </TransitionLink>
          <TransitionLink className="group block border-b border-zinc-200 hover:px-12 transition-all duration-500 py-12 px-8 reveal" to="/project?id=rujack">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <h3 className="text-6xl md:text-8xl font-normal group-hover:text-zinc-400 transition-colors">Rujack</h3>
              <span className="text-lg text-dennis-dark">BRAND IDENTITY & Design</span>
            </div>
          </TransitionLink>
        </div>
        <div className="flex justify-center py-24">
          <TransitionLink className="px-12 py-6 border border-zinc-300 rounded-full text-lg hover:bg-dennis-dark hover:text-white transition-colors relative" to="/work">
            More work <sup className="text-xs opacity-60">12</sup>
          </TransitionLink>
        </div>
      </section>

      {/* Marquee Image Grid Section */}
      <div className="py-12 bg-white overflow-hidden flex flex-col gap-8 md:gap-12 pb-32" id="marquee-projects">
        <div className="scroll-marquee-wrapper" id="row-1" ref={row1Ref}>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="HITHAT Padel Club" className="w-full h-full object-cover" src="/hithat-5.png" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="HITHAT Cap" className="w-full h-full object-cover" src="/hithat-1.png" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="HITHAT Apparel" className="w-full h-full object-cover" src="/hithat-2.png" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="HITHAT Polo" className="w-full h-full object-cover" src="/hithat-3.png" />
          </div>
        </div>
        <div className="scroll-marquee-wrapper flex-row-reverse" id="row-2" ref={row2Ref}>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Rujack Food" className="w-full h-full object-cover" src="/rujack-1.png" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Rujack Menu" className="w-full h-full object-cover" src="/rujack-2.png" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Rujack Branding" className="w-full h-full object-cover" src="/rujack-3.png" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Rujack Visual" className="w-full h-full object-cover" src="/rujack-4.png" />
          </div>
        </div>
      </div>

      {/* Curve Transition */}
      <div className="relative w-full h-12 md:h-24 bg-dennis-dark">
        <div className="absolute top-0 left-0 w-full h-full bg-white" style={{borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%'}}></div>
      </div>
    </>
  );
}
