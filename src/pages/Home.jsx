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
      {/* Hero Section */}
      <section className="relative min-h-screen bg-dennis-grey flex flex-col justify-between overflow-hidden" data-purpose="hero-section" id="hero">
        <Header />
        
        <div className="absolute bottom-0 md:-bottom-12 left-0 w-full z-10 flex justify-center pointer-events-none">
          <div className="reveal active">
            <img 
              alt="Dennis Snellenberg" 
              className="w-96 md:w-[60rem] max-w-none max-h-[90vh] h-auto object-contain pointer-events-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr4KIOp3lEosOj1h_CLDoo6WJ7wMyT8FjqlAzY4Wrc-R2h4IxhQmXNyTH0_qbGTXiSTAx2iQ8c6yHsBMyqN2F9CRqQNIq30JoxQ60HRCuoQe1Hh5aHag86aNbgkZDdrbTuh2hQG5zmkNYOmCaftQL6aJO4-xhTwadW0-_yW9wAoRt4ExEGxumKBVm2ZWt5nhHeidStHB93BnlzkJopDI-TpD50ejVfNlrAh5D2i_l6BCqZiApHlHs0Jg9ltnGMJcmx7g" 
            />
          </div>
        </div>
        
        <div className="absolute right-8 md:right-12 top-32 md:top-48 text-right z-10 reveal active fade-right">
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
          <div className="md:col-span-8 reveal active fade-left">
            <h2 className="text-3xl md:text-5xl leading-tight font-normal text-dennis-dark">
              Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
            </h2>
          </div>
          <div className="md:col-span-4 reveal active fade-right">
            <p className="text-lg text-zinc-600 mb-12">
              The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
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

      {/* Marquee Image Grid Section */}
      <div className="py-12 bg-white overflow-hidden flex flex-col gap-8 md:gap-12 pb-32" id="marquee-projects">
        <div className="scroll-marquee-wrapper" id="row-1" ref={row1Ref}>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNpVlPYYNCJV1GgbxkVN7vXRUQ3on54dzeMO4UmFc6ZAArku10qCNZjn8HRGoCPLWTJJ9e-KEcDBjo_CjYs4RCnNmkH0tZkCi1tvu5xNwuaXtnRGn2hUoeC_KF4dfXfST7FBRfSqBTOQDIVS3nmK80clmdVVujzwXLmy6ckJGCukRmMrhrlUrFiZgEajorrBYgpnvha2141Mwwr_SNL2djClKebmVOCXr2mTnjlh-tSD2gN2LQIJcwLi73OR5nSz_EfA" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 4" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTcqSk98KySHDKWrrLTW6YzEw-WC6FXovLIejjmJ0_4VbvwTamGaApX8nGz3gbYXzfkctcJjfWci9-lqUYakEQ1Fky1_QvvaK6XnnFLDmLxvIC73PiIjGTMFUjxeduvy62bTNSbgtDSIqB1si6ROGKK3MKeiBOILHKhUl1ZD0gvNnpl-cvTYMAI9sFZ8lhUJdk84IxOHwKtasLKhbgsLpcvV9Jbn66LJS8hzwKq-cJbc3HJdaAP79is5JdUPVWsp1G9g" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 5" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPjpsIGCmHxIRuAgBLj4i6V1EySI61kmsvf1PAL7Eg6Sn0Zk8uJpp1YOuMG8Axt4FFuejQgXF-WzqW3Z1-NWeNBlE9bKrjWqTJJj7y43TCiYbcfv_8YeDOA5FWQwSmMkZr2gI5KVEE-Hgs8CJRrjSZdobxyowXTmxcJN-yptefJoGaYyh7WTR48I77fSd87kkiUmFfJmXs0IamAWcSFF8kaJsU84KcnHp7Ior7EbTPi2fs9jXNl3rygV1_ENFI--bgow" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 3 Duplicate" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzcmgo3S_4-Ikztmit60goKMtWpQXs9j-VXatweLHvm68us1-A6P7Da0yO3wsWnOm6LF59uoR1TxLWfHelNyr9mk3S92RvZ5cOwPjEaeqwJhtnXqUnl9OM59rvCAKtzngtFF2RQyzAIQ7sbQJ1WlGEryaXKVfwUZDKKLUVIqIw3Elk2NdIn7TprR7L_3VTn8NqHUPnnP8h-RO5xnXBI5vml1jyRbFNx4ffz0oujOq5KCyMDYdPqb97EcnE2_Nzv45IPw" />
          </div>
        </div>
        <div className="scroll-marquee-wrapper flex-row-reverse" id="row-2" ref={row2Ref}>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 6" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5pG9VhQ4AzYBIqTxNcWh5sooTd2LKhSwbr9pbaviJ2tSVywc4AA7cgVhNCWGDSmFO4F_t9v2jxxcmQhwgNAZQCjdtNtKwYzWLtOYOkS_uLw4QkIflKu4JlGe2HLeBrfgEnoWyo4CO9oLXWn9UaEknguRMYUeHEzwhGtNK6E5kpYdi4O9aIgQAVFmT8A1V_BL-Qsw4OSJygQsJw-b_Ud40TXoDmx31vefK316GT1RdnOAeSyaDsbm64CnzkAnI_1Dj4Q" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 7" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEEI61L9CxF8Ra_MD3bPnCG8KyMS9byNBNPW9N09S8XKTJ00rMO-x3CXpzFdvRHRwYDFnrBFEi4Ag8jl7Q1iQPqK6KYydc5m_HNLQJHEPvPddduaSX_3PZcZxzIOiKdoDsaM9J_ZiDR8GC2O-Xn_Yk5i5nA_v7QpUcu1wyyq9xXpLLvY8cPxLf41e5_RnQnEwxjZ_vJTrEgxjR_93qVqzYkt8dpcvKhUChiTnp5b4mqyAZdWTFvRongMoQ9vwJ-hTUPA" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 8" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nBzR_c8J1I8JJ86VXH031DFvNcklRmwGxdkj9kggY7loCKfrwJKJv8tstzPy1kJ7TYBFzRr50sNpcfPqKAGzakmREcFB9GuyWZt-a-SqAELoSHZoRYS9k8nTlZEq0CB9AptoAT-Evl0ir6eP4SKLBMy1rNljmj_MkIpSCWXrS33huzWtjP1yGykdGrz4KDBcmjgWqio4RwKI0cJCwy0dg3SewvwQ00fNf5CCB2O_yGRGpqkACABBth_dW77HAp0vUg" />
          </div>
          <div className="scroll-marquee-item bg-zinc-100 aspect-video overflow-hidden">
            <img alt="Project 6 Duplicate" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5pG9VhQ4AzYBIqTxNcWh5sooTd2LKhSwbr9pbaviJ2tSVywc4AA7cgVhNCWGDSmFO4F_t9v2jxxcmQhwgNAZQCjdtNtKwYzWLtOYOkS_uLw4QkIflKu4JlGe2HLeBrfgEnoWyo4CO9oLXWn9UaEknguRMYUeHEzwhGtNK6E5kpYdi4O9aIgQAVFmT8A1V_BL-Qsw4OSJygQsJw-b_Ud40TXoDmx31vefK316GT1RdnOAeSyaDsbm64CnzkAnI_1Dj4Q" />
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
