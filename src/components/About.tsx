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
            Building Software, <span className="text-primary-light">Driven by Data.</span>
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
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-1">Awards</h3>
                    <ul className="space-y-1">
                      <li className="text-primary/70 text-xs">2x Dean's List Awardee</li>
                      <li className="text-primary/70 text-xs">Best Computer Science Award (Final Year Project)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-1">Certifications</h3>
                    <ul className="space-y-1">
                      <li className="text-primary/70 text-xs">IBM Data Science Professional Certificate</li>
                      <li className="text-primary/70 text-xs">Microsoft Data Visualization Professional Certificate</li>
                      <li className="text-primary/70 text-xs">AWS Academy Graduate</li>
                      <li className="text-primary/70 text-xs">Deeplearning.AI Generative AI for Software Development</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Main Narrative */}
              <div className="md:col-span-2 space-y-6 text-primary/80 leading-relaxed text-lg">
                <p>
                  Pursuing a Bachelor of Computer Science at <span className="text-primary font-bold">Universiti Putra Malaysia</span>, I am a
                  final-year student with a strong foundation in both software engineering and data science.
                </p>
                <p>
                  My toolkit spans <span className="text-primary font-bold">Python, SQL, JavaScript, </span> and frameworks like <span className="text-primary font-bold">React and Node.js</span>,
                  with hands-on experience in full-stack web development, statistical modeling, and dashboard development.
                </p>
                <p>
                  During my internship at <span className="text-primary font-bold">AMAST Sdn Bhd</span>, I built a multi-tenant CRM system end-to-end,
                  gaining practical experience shipping production-grade web applications.
                </p>
                <div className="p-4 bg-secondary/30 border-l-4 border-primary mt-4">
                  <p className="text-primary italic font-medium">
                    My Final Year Project <span className="text-primary font-bold">"Forecasting Ethnic Composition using Time-Series
                    and Geopolitical NLP to Support Policy Planning"</span> won the <span className="text-primary font-bold">Best Computer Science Award — CSIT-UPM iFYP2026</span>.
                  </p>
                </div>
                <p>
                  I believe in combining technical rigor with creative problem-solving to
                  deliver software and insights that drive meaningful decisions.
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