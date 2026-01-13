import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // The missing import
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-background overflow-hidden relative">
      {/* Abstract Background Blobs - Using your new palette */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-primary font-bold tracking-widest uppercase text-sm block mb-4">
              // Data Scientist & AI Engineering Enthusiast
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-6">
              Javan <br />
              <span className="text-primary-light">Herlambang</span>
            </h1>
            <p className="text-lg md:text-xl text-primary/70 max-w-lg mb-10 leading-relaxed">
              Final-year Computer Science student specializing in data science, AI, and building data-driven solutions for real-world impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-none h-auto transition-all group"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                asChild
                className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-none h-auto"
              >
                <a href="/Resume.pdf" download>
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Geometric Frame Design */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 border-2 border-primary/20 translate-x-4 translate-y-4 -z-10" />
              <div className="absolute -inset-4 border-2 border-secondary translate-x-2 translate-y-2 -z-10" />
              
              <div className="aspect-[4/5] overflow-hidden bg-accent/20">
                <img
                  src="/MainProfile.JPG" // Ensure this is in your /public folder
                  alt="Javan Herlambang"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Badge for UPM */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 font-mono text-xs uppercase tracking-tighter shadow-xl">
                UPM Bachelor <br /> CS (Hons)
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;