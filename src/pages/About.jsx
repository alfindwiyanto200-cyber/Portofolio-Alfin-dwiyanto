import { useState, useEffect } from 'react';
import Header from '../components/Header';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="w-full px-8 md:px-20 lg:px-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-6 reveal">About me</p>
          <h1 className="text-5xl md:text-[7rem] leading-[1.05] font-normal tracking-tight mb-16 reveal fade-left">
            Helping brands thrive<br className="hidden md:block" /> in the digital world
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 reveal fade-left">
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 mb-6">
                I help businesses from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
              </p>
              <p className="text-zinc-400 text-lg italic">Always exploring...</p>
            </div>
            <div className="md:col-span-7 reveal fade-right">
              <div className="w-full aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr4KIOp3lEosOj1h_CLDoo6WJ7wMyT8FjqlAzY4Wrc-R2h4IxhQmXNyTH0_qbGTXiSTAx2iQ8c6yHsBMyqN2F9CRqQNIq30JoxQ60HRCuoQe1Hh5aHag86aNbgkZDdrbTuh2hQG5zmkNYOmCaftQL6aJO4-xhTwadW0-_yW9wAoRt4ExEGxumKBVm2ZWt5nhHeidStHB93BnlzkJopDI-TpD50ejVfNlrAh5D2i_l6BCqZiApHlHs0Jg9ltnGMJcmx7g"
                  alt="Alfin Dwiyanto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-zinc-100 py-24 md:py-40 px-8 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-normal mb-20 reveal">I can help you with ...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: '01',
                title: 'Design',
                desc: 'Dengan pengalaman di desain grafis, brand identity, dan fotografi produk — saya menciptakan visual yang kuat dan berkarakter untuk brand Anda.'
              },
              {
                num: '02',
                title: 'Foto Produk',
                desc: 'Menonjolkan produk Anda melalui foto yang artistik dan storytelling. Dari kopi hingga fashion, setiap gambar bercerita.'
              },
              {
                num: '03',
                title: '✦ Full Package',
                desc: 'Dari konsep visual hingga eksekusi digital yang lengkap. Identitas brand, konten, hingga kehadiran online yang menyeluruh.'
              }
            ].map((s, i) => (
              <div key={i} className="border-t border-zinc-300 pt-8 pr-0 md:pr-12 pb-12 reveal fade-up">
                <p className="text-zinc-400 text-sm mb-6">{s.num}</p>
                <h3 className="text-2xl md:text-3xl font-normal mb-4">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="w-full bg-white py-24 md:py-40 px-8 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="reveal fade-left">
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-8">Personal Info</p>
            <div className="space-y-8">
              <div className="border-t border-zinc-100 pt-6">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Date of Birth</p>
                <p className="text-xl font-normal">18 Mei 2001</p>
              </div>
              <div className="border-t border-zinc-100 pt-6">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Domicile</p>
                <p className="text-xl font-normal">Antapani Lama, Bandung<br /><span className="text-zinc-500">Jawa Barat, Indonesia</span></p>
              </div>
              <div className="border-t border-zinc-100 pt-6">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Address</p>
                <p className="text-xl font-normal">Kp. Lempong, Jl. Desa Sukaraja<br /><span className="text-zinc-500">Kab. Garut, Jawa Barat</span></p>
              </div>
              <div className="border-t border-zinc-100 pt-6">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Socials</p>
                <div className="flex gap-6 text-base">
                  <a href="https://www.instagram.com/alfindwiyanto18/" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity underline underline-offset-4">Instagram</a>
                  <a href="https://www.behance.net/alfindwiyanto" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity underline underline-offset-4">Behance</a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal fade-right">
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-8">Background</p>
            <p className="text-2xl md:text-3xl font-normal leading-snug text-dennis-dark mb-8">
              Seorang freelance designer & fotografer produk berbasis di Bandung, dengan latar belakang digital marketing dan brand identity.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Berbekal pengalaman yang beragam — dari desain grafis, fotografi produk, hingga web development — saya memadukan estetika visual dengan keahlian teknis untuk menciptakan brand yang utuh dan berkesan.
            </p>
          </div>
        </div>
      </section>

      {/* Curve Transition */}
      <div className="relative w-full h-12 md:h-24 bg-dennis-dark">
        <div className="absolute top-0 left-0 w-full h-full bg-white" style={{borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%'}}></div>
      </div>
    </>
  );
}
