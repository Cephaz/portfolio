import About from './components/About';
import Contact from './components/Contact';
import IntroSection from './components/IntroSection';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="text-text-900 bg-background-50">
      <Navbar />
      <IntroSection />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
