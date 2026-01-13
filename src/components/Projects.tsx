import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Forecasting Ethnic Composition Using Time-Series & NLP",
    description: "In-progress Final Year Project tackling the lack of information on the dynamics of ethnic composition. Uses time-series forecasting combined with geopolitical NLP analysis to support policy planning and provide actionable insights for decision-makers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "Time-Series", "NLP", "Policy Analytics"],
    github: "https://github.com/Vansaher/Forecasting-Ethnic-composition-Using-time-series-and-Geopolitical-NLP-to-Support-Policy-Planning",
    demo: "#",
    featured: true,
    status: "In Progress",
  },
  {
    title: "Stroke Prediction for Early Intervention & Patient Stratification",
    description: "Applied machine learning to predict stroke risk based on patient health records, using ADASYN for class imbalance and optimizing decision thresholds for high recall.",
    image: "/Stroke Prediction.png",
    tags: ["Python", "Machine Learning", "Logistic Regression", "Random Forest", "XGBoost"],
    github: "https://github.com/Vansaher/Stroke-Prediction-For-Early-Intervention-And-Patient-Stratification/blob/master/README.md",
    demo: "https://sites.google.com/view/dataminingprojectupm/project-overview?authuser=0", 
    featured: true,
  },
  {
    title: "Personal Finance Tracker Dashboard with Forecasting",
    description: "A Python-based tracker that extracts bank statement data, cleans transactions, and forecasts future spending using ARIMA models. Visualized through an interactive Streamlit dashboard.",
    image: "/Finance Tracker.png", 
    tags: ["Python", "Streamlit", "ARIMA", "Data Cleaning", "Financial Analysis"],
    github: "https://github.com/Vansaher/Personal-Finance-Tracker", 
    demo: "https://personal-finance-tracker-vansaher.streamlit.app/", 
    featured: true,
  },
  {
    title: "Historical Stock Revenue Data Dashboard",
    description: "Interactive financial dashboard using Streamlit, visualizing 10+ years of stock and revenue data across multiple tickers. Automated data extraction with pandas, NumPy, and yfinance, integrating technical indicators (MA, RSI, MACD). CSV upload/export features reduced manual analysis time by 60%.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    tags: ["Streamlit", "Pandas", "NumPy", "yfinance", "Matplotlib"],
    github: "https://github.com/Vansaher/Analyzing-Historical-Stock-Revenue-Data-and-Building-a-Dashboard",
    demo: "https://stock-revenue.streamlit.app/",
    featured: false,
  },
  {
    title: "SpaceX Falcon 9 First Stage Landing Prediction",
    description: "A real-time, interactive dashboard built with Dash and Plotly to analyze SpaceX launch data. Features include mission success rate exploration, payload correlations, and launch site performance analytics.",
    image: "/SpaceX.png",
    tags: ["Python", "Dash", "Plotly", "Data Analysis", "Predictive Modeling"],
    github: "https://github.com/Vansaher/SpaceX-Falcon-9-first-stage-Landing-Prediction",
    demo: "https://f89ba3a8-a261-4854-996d-022b38af957c.plotly.app",
    featured: false,
  },
  {
    title: "Interactive Automobile Sales Dashboard With Recession Period Analytics",
    description: "A comprehensive Plotly Dash application for exploring historical automobile sales trends. Features dynamic yearly and monthly reporting, with a specialized focus on visualizing the impact of economic recession periods on different vehicle types.",
    image: "/Automobile Sales.png", 
    tags: ["Python", "Dash", "Plotly", "Pandas", "Data Visualization"],
    github: "https://github.com/Vansaher/Interactive-Automobile-Sales-Dashboard-With-Recession-Period-Analytics",
    demo: "https://3694669d-58a7-40d3-b3ac-b4c60cdea3f1.plotly.app/", // Add your live link here if you have it hosted on Render or PythonAnywhere
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass rounded-2xl overflow-hidden group ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {"status" in project && project.status && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono border border-primary/30">
            {project.status}
          </span>
        </div>
      )}
      <div className={`grid ${project.featured ? "md:grid-cols-2" : ""} h-full`}>
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <a
              href={project.github}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-primary text-sm tracking-wider">
                // featured work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Selected <span className="text-gradient">Projects</span>
              </h2>
            </div>
            <a
              href="https://github.com/Vansaher?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              View all projects
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <a
            href="https://github.com/Vansaher?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center gap-2 mt-8 text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
