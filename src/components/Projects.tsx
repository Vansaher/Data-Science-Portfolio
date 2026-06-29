import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, ChevronDown, Trophy } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const PROJECT_CATEGORIES = [
  "AI & Machine Learning",
  "Data Analytics & Dashboards",
  "Web Applications",
] as const;

const projects = [
  {
    title: "Forecasting Ethnic Composition Using Time-Series & NLP",
    description: "Final Year Project tackling the lack of information on the dynamics of ethnic composition. Uses time-series forecasting combined with geopolitical NLP analysis to support policy planning and provide actionable insights for decision-makers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "Time-Series", "NLP", "Policy Analytics"],
    github: "https://github.com/Vansaher/Forecasting-Ethnic-composition-Using-time-series-and-Geopolitical-NLP-to-Support-Policy-Planning",
    demo: "https://canva.link/4cesx9ln41mezh3",
    demoLabel: "Presentation",
    featured: true,
    category: "AI & Machine Learning",
    award: "Best Computer Science Award — CSIT-UPM iFYP2026",
  },
  {
    title: "Stroke Prediction for Early Intervention & Patient Stratification",
    description: "Applied machine learning to predict stroke risk based on patient health records, using ADASYN for class imbalance and optimizing decision thresholds for high recall.",
    image: "/Stroke Prediction.png",
    tags: ["Python", "Machine Learning", "Logistic Regression", "Random Forest", "XGBoost"],
    github: "https://github.com/Vansaher/Stroke-Prediction-For-Early-Intervention-And-Patient-Stratification/blob/master/README.md",
    demo: "https://sites.google.com/view/dataminingprojectupm/project-overview?authuser=0",
    featured: true,
    category: "AI & Machine Learning",
  },
  {
    title: "SpaceX Falcon 9 First Stage Landing Prediction",
    description: "A real-time, interactive dashboard built with Dash and Plotly to analyze SpaceX launch data. Features include mission success rate exploration, payload correlations, and launch site performance analytics.",
    image: "/SpaceX.png",
    tags: ["Python", "Dash", "Plotly", "Data Analysis", "Predictive Modeling"],
    github: "https://github.com/Vansaher/SpaceX-Falcon-9-first-stage-Landing-Prediction",
    demo: "https://f89ba3a8-a261-4854-996d-022b38af957c.plotly.app",
    featured: false,
    category: "AI & Machine Learning",
  },
  {
    title: "Personal Finance Tracker Dashboard with Forecasting",
    description: "A Python-based tracker that extracts bank statement data, cleans transactions, and forecasts future spending using ARIMA models. Visualized through an interactive Streamlit dashboard.",
    image: "/Finance Tracker.png",
    tags: ["Python", "Streamlit", "ARIMA", "Data Cleaning", "Financial Analysis"],
    github: "https://github.com/Vansaher/Personal-Finance-Tracker",
    demo: "https://personal-finance-tracker-vansaher.streamlit.app/",
    featured: true,
    category: "Data Analytics & Dashboards",
  },
  {
    title: "Historical Stock Revenue Data Dashboard",
    description: "Interactive financial dashboard using Streamlit, visualizing 10+ years of stock and revenue data across multiple tickers. Automated data extraction with pandas, NumPy, and yfinance, integrating technical indicators (MA, RSI, MACD). CSV upload/export features reduced manual analysis time by 60%.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    tags: ["Streamlit", "Pandas", "NumPy", "yfinance", "Matplotlib"],
    github: "https://github.com/Vansaher/Analyzing-Historical-Stock-Revenue-Data-and-Building-a-Dashboard",
    demo: "https://stock-revenue.streamlit.app/",
    featured: false,
    category: "Data Analytics & Dashboards",
  },
  {
    title: "Interactive Automobile Sales Dashboard With Recession Period Analytics",
    description: "A comprehensive Plotly Dash application for exploring historical automobile sales trends. Features dynamic yearly and monthly reporting, with a specialized focus on visualizing the impact of economic recession periods on different vehicle types.",
    image: "/Automobile Sales.png",
    tags: ["Python", "Dash", "Plotly", "Pandas", "Data Visualization"],
    github: "https://github.com/Vansaher/Interactive-Automobile-Sales-Dashboard-With-Recession-Period-Analytics",
    demo: "https://3694669d-58a7-40d3-b3ac-b4c60cdea3f1.plotly.app/", // Add your live link here if you have it hosted on Render or PythonAnywhere
    featured: false,
    category: "Data Analytics & Dashboards",
  },
  {
    title: "AMAST CRM System",
    description: "Multi-tenant Customer Relationship Management system built during my internship at AMAST Sdn Bhd. Features role-based access control, AI-powered lead generation (Alibaba Qwen LLM, Apollo.io, Apify), bulk import, email campaigns with Gmail sync, and a full sales pipeline — built with Node.js/Express and React/MySQL.",
    image: "/AMAST CRM.png",
    logo: "/AMAST Logo.png",
    tags: ["React", "Node.js", "Express", "MySQL", "REST API", "JWT Auth"],
    github: "https://github.com/wahajws/amast-crm",
    demo: "#",
    featured: true,
    status: "Internship Project",
    category: "Web Applications",
    internship: true,
    readme: {
      summary:
        "A multi-tenant Customer Relationship Management (CRM) system built with Node.js, Express, React, and MySQL.",
      features: [
        "Multi-Tenant Workspaces — self-service signup, email verification, workspace onboarding",
        "Role-Based Access Control — granular permissions, role-request/approval workflows, last-admin protection, support impersonation",
        "AI-Powered Lead Generation — Alibaba Qwen LLM, Google Custom Search / Serper, Apollo.io people & company search",
        "Apollo.io & Apify Integrations — contact/company enrichment and LinkedIn profile scraping",
        "Bulk Import — Excel import with automatic data enrichment and email generation",
        "Email Campaigns & Gmail Sync — bulk email, campaign analytics, connected Gmail/IMAP accounts",
        "Contact, Account & Opportunity Management — full CRUD, sales pipeline, proposals & document generation",
        "Workflow Automation, Notifications & Audit Logging — configurable rules, real-time SSE notifications, sensitive-action tracking",
        "Platform Admin Console — cross-tenant administration, usage tracking, and system settings",
      ],
      techStack: {
        Backend: ["Node.js & Express", "MySQL (mysql2)", "JWT Authentication", "Alibaba Qwen LLM", "Apollo.io API & OAuth", "Apify API", "Gmail API / IMAP", "Nodemailer", "node-cron"],
        Frontend: ["React 18", "Vite", "Tailwind CSS", "React Router", "Axios", "Recharts"],
      },
    },
  },
  {
    title: "Alumni Finder",
    description: "Web app built during my internship at AMAST Sdn Bhd to help the university locate and contact alumni at scale. Upload a CSV of alumni names and the system scrapes Google search results via Apify to surface emails, phone numbers, and social profiles, then exports the enriched results.",
    image: "/Alumni Finder.png",
    logo: "/AMAST Logo.png",
    tags: ["Node.js", "Express", "Apify API", "SQLite", "CSV/Excel Export"],
    github: "#",
    demo: "#",
    featured: false,
    status: "Internship Project",
    category: "Web Applications",
    internship: true,
    readme: {
      summary:
        "A web application that helps universities find and contact alumni by scraping Google search results via the Apify API.",
      features: [
        "CSV Upload — bulk-upload alumni names to search in batch",
        "Automated Web Scraping — Apify Google Search API surfaces emails, phone numbers, and social profiles",
        "Search History — SQLite database stores alumni records and past searches",
        "Export — download enriched results as CSV or Excel",
      ],
      techStack: {
        Backend: ["Node.js & Express", "Apify API", "SQLite", "Multer (file uploads)", "Axios"],
      },
    },
  },
  {
    title: "LinkedIn Auto-Responder (AI-Powered)",
    description: "Chrome extension built during my internship at AMAST Sdn Bhd that adds an AI-generate button to LinkedIn's message composer. A local Node.js backend connects to Alibaba's Qwen LLM to draft contextual replies, with tone selection and optional PII redaction before any data reaches the AI.",
    image: "/LinkedIn Auto-Responder.png",
    logo: "/AMAST Logo.png",
    tags: ["Chrome Extension", "Manifest V3", "Express.js", "Alibaba Qwen LLM"],
    github: "#",
    demo: "#",
    featured: false,
    status: "Internship Project",
    category: "Web Applications",
    internship: true,
    readme: {
      summary:
        "A Chrome Extension (Manifest V3) that adds an AI-powered 'Auto-generate' button to LinkedIn's message composer, backed by Alibaba's Qwen LLM.",
      features: [
        "Content Script Integration — injects an Auto-generate button directly into LinkedIn's message composer",
        "AI Draft Generation — calls a local Node.js backend that prompts Alibaba's Qwen (DashScope) LLM",
        "Tone Selection — configurable reply tone and conversation context limits",
        "PII Redaction — optional redaction of personal data before it's sent to the AI",
      ],
      techStack: {
        Extension: ["Chrome Extension (Manifest V3)", "Content Scripts"],
        Backend: ["Express.js", "Alibaba Qwen (DashScope) LLM", "CORS", "Rate Limiting"],
      },
    },
  },
  {
    title: "STPM Course Matching",
    description: "Full-stack web app built during my internship at AMAST Sdn Bhd for Malaysian university admissions. Students upload their STPM result PDFs, the system extracts grades and matches them against course catalogues from six universities, then recommends suitable programs — with optional Qwen AI enrichment of course descriptions.",
    image: "/Course Matching.png",
    logo: "/AMAST Logo.png",
    tags: ["Node.js", "Express", "Sequelize", "MySQL", "Alibaba Qwen LLM"],
    github: "#",
    demo: "#",
    featured: false,
    status: "Internship Project",
    category: "Web Applications",
    internship: true,
    readme: {
      summary:
        "A web app for Malaysian university admissions that extracts STPM result grades and matches them against course catalogues to recommend suitable programs.",
      features: [
        "PDF Grade Extraction — parses STPM result PDFs to pull subject grades",
        "Course Catalogue Matching — imports and matches against catalogues from UM, UPM, UKM, USM, UTM, and UUM",
        "Admin Import & Review — preview and approve catalogue updates before publishing",
        "AI Enrichment — optional Qwen AI normalization of entry requirements and course descriptions",
      ],
      techStack: {
        Backend: ["Node.js & Express", "Sequelize", "MySQL", "Multer", "pdf-parse", "Alibaba Qwen (DashScope) LLM"],
      },
    },
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [readmeOpen, setReadmeOpen] = useState(false);

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
          {"logo" in project && project.logo && (
            <div className="absolute top-3 left-3 bg-white rounded-lg p-1.5 shadow-md">
              <img src={project.logo} alt={`${project.title} logo`} className="h-6 w-auto" />
            </div>
          )}
          {"award" in project && project.award && (
            <div
              className="absolute top-3 left-3 bg-white rounded-lg p-1.5 shadow-md"
              title={project.award}
            >
              <Trophy className="h-6 w-6 text-amber-500" />
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {"award" in project && project.award && (
              <p className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-3">
                <Trophy className="h-3.5 w-3.5" />
                {project.award}
              </p>
            )}
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

          {"internship" in project && project.internship && project.readme ? (
            <Collapsible open={readmeOpen} onOpenChange={setReadmeOpen} className="pt-4 border-t border-border/50">
              <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full">
                <ChevronDown className={`w-4 h-4 transition-transform ${readmeOpen ? "rotate-180" : ""}`} />
                Description
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 space-y-4 text-sm text-muted-foreground">
                <p className="leading-relaxed">{project.readme.summary}</p>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Features</h4>
                  <ul className="space-y-1.5 list-disc list-inside">
                    {project.readme.features.map((feature) => (
                      <li key={feature} className="leading-relaxed">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Tech Stack</h4>
                  {Object.entries(project.readme.techStack).map(([group, items]) => (
                    <p key={group} className="leading-relaxed">
                      <span className="text-foreground font-medium">{group}: </span>
                      {items.join(", ")}
                    </p>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ) : (
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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {"demoLabel" in project && project.demoLabel ? project.demoLabel : "Demo"}
              </a>
            </div>
          )}
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

          <div className="space-y-16">
            {PROJECT_CATEGORIES.map((category) => {
              const categoryProjects = projects.filter((project) => project.category === category);
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="font-mono text-sm tracking-wider text-primary mb-6">
                    // {category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryProjects.map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
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
