export default function Footer() {
  return (
    <footer className="bg-dennis-dark text-white pt-16 pb-12 px-8 md:px-24" data-purpose="footer-contact" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-800 pb-24 mb-16 relative">
          <div className="flex items-center gap-8 mb-12 md:mb-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden reveal active fade-right">
              <img alt="Dennis Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8IV0YdB8T-xpBCSERH6t_-LeWHd_6vSmVnNvhJp_kUUgO07elyjiCPFoNLVz71WDE2FxrwwK1d1F11jMnAY5FbaJUX6ZVYIAsMI-8mr0Nz7tDc1BlbuKMbo5hqF_eayFmjwhXoW-DP6wtuNqynpNqSmSwj8RzDvTfDeU4PM78-zWUJ0Dbe8w_CE5N0RaJjZ58Db3nz8JCIymOpMfWh1AIseGyu21D3nKE5AGQxmIpsHN867uCRwq1uth2ZSwI_RL8w" />
            </div>
            <h2 className="text-6xl md:text-8xl font-normal leading-none reveal active fade-right">Let's work<br />together</h2>
          </div>
          <div className="relative md:absolute md:right-0 md:-top-10 reveal active">
            <svg className="absolute -left-12 top-0 w-8 h-8 text-zinc-500 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17"></path>
            </svg>
            <button className="circle-btn w-44 h-44 md:w-56 md:h-56 bg-dennis-blue rounded-full flex items-center justify-center text-xl font-medium shadow-2xl">
              Get in touch
            </button>
          </div>
        </div>
        {/* Contact Info Buttons */}
        <div className="flex flex-wrap gap-4 mb-32">
          <a className="px-8 py-6 rounded-full border border-zinc-700 hover:border-white transition-colors text-lg" href="mailto:info@dennissnellenberg.com">
            info@dennissnellenberg.com
          </a>
          <a className="px-8 py-6 rounded-full border border-zinc-700 hover:border-white transition-colors text-lg" href="tel:+31627847430">
            +31 6 27 84 74 30
          </a>
        </div>
        {/* Footer Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-zinc-500">
          <div>
            <p className="uppercase text-xs tracking-widest mb-4">Version</p>
            <p className="text-white text-base">2022 © Edition</p>
          </div>
          <div>
            <p className="uppercase text-xs tracking-widest mb-4">Local Time</p>
            <p className="text-white text-base" id="local-time">05:35 PM GMT+2</p>
          </div>
          <div className="md:col-span-2">
            <p className="uppercase text-xs tracking-widest mb-4">Socials</p>
            <div className="flex gap-8 text-white text-base">
              <a className="hover:opacity-70" href="#">Awwwards</a>
              <a className="hover:opacity-70" href="#">Instagram</a>
              <a className="hover:opacity-70" href="#">Twitter</a>
              <a className="hover:opacity-70" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
