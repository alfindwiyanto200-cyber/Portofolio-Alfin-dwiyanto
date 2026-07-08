import TransitionLink from '../components/TransitionLink';
import Header from '../components/Header';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Work() {
  useScrollReveal();
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
          <button className="px-8 md:px-10 py-3 md:py-4 bg-dennis-dark text-white rounded-[3rem] text-sm md:text-base hover:opacity-90 transition-opacity">
            All
          </button>
          <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-dennis-dark border border-zinc-200 rounded-[3rem] text-sm md:text-base hover:border-zinc-400 transition-colors">
            Design <sup className="text-[10px] ml-1 text-zinc-500">7</sup>
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
        {['twice', 'damai', 'fabric'].map(id => (
          <TransitionLink key={id} to={`/project?id=${id}`} className="group grid grid-cols-12 px-4 md:px-8 py-8 md:py-12 border-b border-zinc-200 items-center hover:bg-zinc-50 transition-colors reveal">
            <div className="col-span-12 md:col-span-5 mb-4 md:mb-0 text-4xl md:text-[3.25rem] font-normal md:group-hover:translate-x-6 transition-transform duration-500 capitalize">{id}</div>
            <div className="col-span-12 md:col-span-3 text-base md:text-lg text-zinc-600 md:text-dennis-dark">Location</div>
            <div className="col-span-12 md:col-span-3 text-base md:text-lg text-zinc-600 md:text-dennis-dark">Design</div>
            <div className="col-span-12 md:col-span-1 text-base md:text-lg text-zinc-500 md:text-right hidden md:block">2024</div>
          </TransitionLink>
        ))}
      </div>
      
      {/* Curve Transition */}
      <div className="relative w-full h-12 md:h-24 bg-dennis-dark mt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-white" style={{borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%'}}></div>
      </div>
    </>
  );
}
