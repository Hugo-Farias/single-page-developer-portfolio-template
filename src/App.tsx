import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
