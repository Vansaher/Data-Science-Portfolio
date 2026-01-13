import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // about me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
            Turning Data Into <span className="text-gradient">Stories</span>
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile Picture */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 mb-6">
                  <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                    {<img 
                    src="/Profile.jpg" 
                    alt="Profile Picture" 
                    className="w-full h-full object-cover rounded-xl" 
                  />}
                    <span className="text-6xl text-muted-foreground"></span>
                  </div>
                </div>
                
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="font-mono text-sm text-primary mb-1">Location</h3>
                    <p className="text-foreground">Malaysia</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-sm text-primary mb-1">Status</h3>
                    <p className="text-foreground">Final Year Student</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-sm text-primary mb-1">Education</h3>
                    <p className="text-foreground">B.Sc. Computer Science (Hons)</p>
                    <p className="text-muted-foreground text-sm">Universiti Putra Malaysia</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pursuing a Bachelor of Computer Science at Universiti Putra Malaysia, I am a 
                  final-year student with a strong focus on <span className="text-foreground font-medium">data science and AI</span>.
                </p>
                <p>
                  My academic foundation includes <span className="text-foreground font-medium">Python, Java, and SQL</span>, 
                  with practical experience in data cleaning, visualization, statistical modeling, 
                  and dashboard development.
                </p>
                <p>
                  I am experienced in building complex projects such as my Final Year Project: 
                  <span className="text-primary font-medium"> "Forecasting Ethnic Composition Using Time-Series 
                  and Geopolitical NLP to Support Policy Planning"</span> — tackling real-world 
                  challenges through data-driven approaches.
                </p>
                <p>
                  I believe in combining statistical rigor with creative problem-solving to 
                  deliver actionable insights that drive meaningful decisions.
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
