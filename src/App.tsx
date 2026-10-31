import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-zinc-200 font-sans antialiased relative">
      {/* Film grain overlay */}
      <div className="bg-noise pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
