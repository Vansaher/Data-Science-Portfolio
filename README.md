# Data Science Portfolio | Tech Stack & Architecture
This is a personal portfolio built with a modern web development stack to showcase data science projects with speed and precision.

## 🛠 Tech Stack
- **Framework:** React 18 with TypeScript for type-safe component development.
- **Build Tool:** Vite for lightning-fast Hot Module Replacement (HMR) and optimized production builds.
- **Styling:** Tailwind CSS for a utility-first, responsive design approach.
- **Components:** Built using shadcn/ui and Lucide React for high-quality, accessible UI elements.
- **Animations:** Framer Motion used for smooth scroll-reveal effects and interactive transitions.

## 🏗 System Architecture
**Frontend Performance**
- **Modular Component Design:** The project is organized into reusable components (Hero, Projects, Contact) to ensure maintainability and clean code.
- **Asset Optimization:** Images are served directly from the root-mapped public directory to ensure zero-latency pathing during production builds.
- **Client-Side Routing:** Integrated fallback mechanisms (via _redirects) to support Single Page Application (SPA) routing on Netlify, preventing 404 errors on page refreshes.

**Form Handling & Validation**
- **Controlled Form Logic:** Implemented a functional contact system using React state management and native browser validation (required attributes) to ensure data integrity before submission.
- **Asynchronous Communication:** Leveraging mailto: protocols to bridge frontend interactions with external communication channels without the overhead of a dedicated backend.

## 🚀 Deployment & CI/CD
- **Source Control:** Managed via Git with a clean branching strategy on GitHub.
- **Hosting:** Deployed on **Netlify**, utilizing continuous deployment triggered by pushes to the master branch.
- **Build Pipeline:**
  1. npm install to resolve dependencies from package-lock.json.
  2. npm run build to compile TypeScript into optimized JavaScript modules.
  3. Automated deployment of the dist directory to global Edge nodes.

## 💻 Local Development
To explore the codebase or run it locally:

```
# Clone the repository
git clone https://github.com/Vansaher/Data-Science-Portfolio.git

# Install dependencies
npm install

# Run the development server
npm run dev
```
