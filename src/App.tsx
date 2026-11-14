import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/sections/About';
import Activities from '@/sections/Activities';
import Alumni from '@/sections/Alumni';
import Business from '@/sections/Business';
import Contact from '@/sections/Contact';
import Future from '@/sections/Future';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Levels from '@/sections/Levels';
import Projects from '@/sections/Projects';
import Units from '@/sections/Units';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Business />
        <Levels />
        <Gallery />
        <Activities />
        <Projects />
        <Alumni />
        <Units />
        <Future />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
