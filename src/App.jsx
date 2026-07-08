import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyMenuButton from './components/StickyMenuButton';
import MenuOverlay from './components/MenuOverlay';
import TransitionCurtain from './components/TransitionCurtain';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <TransitionCurtain>
      <div className="antialiased bg-white text-dennis-dark min-h-screen flex flex-col relative overflow-hidden">
        <StickyMenuButton />
        <MenuOverlay />
        
        {/* We place header on individual pages if they have different structures, but we have a global one here for simplicity */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </div>
    </TransitionCurtain>
  );
}

export default App;
