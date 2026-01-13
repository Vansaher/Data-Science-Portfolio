import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BackgroundFlare from "@/components/BackgroundFlare";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // Remove bg-background from here so the flare can be seen through
    <div className="relative min-h-screen"> 
      <BackgroundFlare />
      
      {/* Ensure all sections below have transparent backgrounds */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
