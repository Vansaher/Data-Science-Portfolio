import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 5 },
      { name: "Java", level: 4 },
      { name: "SQL", level: 4 },
      { name: "R", level: 2 },
      { name: "HTML/CSS", level: 3 },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Pandas / NumPy", level: 5 },
      { name: "Scikit-learn", level: 4 },
      { name: "TensorFlow", level: 3 },
      { name: "Jupyter Notebook", level: 5 },
    ],
  },
  {
    title: "Visualization & Dashboards",
    skills: [
      { name: "Matplotlib / Seaborn", level: 4 },
      { name: "Plotly", level: 4 },
      { name: "Streamlit / Dash", level: 5 },
      { name: "Power BI", level: 5 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Spark", level: 3 },
      { name: "MS Office Suite", level: 5 },
      { name: "Git", level: 3 },
    ],
  },
];

const SkillDots = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex items-center justify-between gap-4">
      <span className="font-mono text-sm min-w-[140px]">{name}</span>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((dot) => (
          <motion.div
            key={dot}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + dot * 0.1 }}
            className={`w-4 h-4 rounded-full ${
              dot <= level
                ? "bg-gradient-to-br from-primary to-accent"
                : "bg-secondary border border-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // skills & expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillDots
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
