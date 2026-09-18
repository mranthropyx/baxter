import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Projects from "./components/Projects";
import Methodology from "./components/Methodology";
import Timeline from "./components/Timeline";
import FooterCTA from "./components/FooterCTA";
import CadCursor from "./components/CadCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <div className="noise-overlay" aria-hidden="true" />
      <CadCursor />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Projects />
        <Methodology />
        <Timeline />
        <FooterCTA />
      </main>
    </div>
  );
}
