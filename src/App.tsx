import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SkillsSection />
    </div>
  );
}

export default App;
