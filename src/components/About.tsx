import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase font-bold">
            // about me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mt-4 mb-10">
            Turning Data Into <span className="text-primary-light">Stories.</span>
          </h2>

          <div className="glass p-8 md:p-12 border-2 border-primary/10">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Profile Sidebar */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-primary p-1 mb-8">
                  <div className="w-full h-full bg-secondary flex items-center justify-center overflow-hidden">
                    <img 
                      src="/Profile.jpg" 
                      alt="Javan Herlambang" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                </div>
                
                <div className="space-y-5 text-center md:text-left">
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-1">Status</h3>
                    <p className="text-primary font-bold text-sm">Final Year Student</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-1">Education</h3>
                    <p className="text-primary font-bold text-sm">B.Sc. Computer Science</p>
                    <p className="text-primary/70 text-xs">Universiti Putra Malaysia</p>
                  </div>
                </div>
              </div>

              {/* Main Narrative */}
              <div className="md:col-span-2 space-y-6 text-primary/80 leading-relaxed text-lg">
                <p>
                  Pursuing a Bachelor of Computer Science at <span className="text-primary font-bold">Universiti Putra Malaysia</span>, I am a 
                  final-year student with a deep focus on data science and machine learning.
                </p>
                <p>
                  My toolkit includes <span className="text-primary font-bold">Python, SQL, and NLP</span>, 
                  with hands-on experience in statistical modeling and dashboard development.
                </p>
                <div className="p-4 bg-secondary/30 border-l-4 border-primary mt-4">
                  <p className="text-primary italic font-medium">
                    Currently focussed on my Final Year Project <span className="text-primary font-bold">"Forecasting Ethnic Composition using Time-Series 
                    and Geopolitical NLP to Support Policy Planning."</span>
                  </p>
                </div>
                <p>
                  I believe in combining technical rigor with creative problem-solving to 
                  deliver insights that drive meaningful decisions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;