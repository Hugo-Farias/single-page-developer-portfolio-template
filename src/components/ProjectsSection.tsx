import "./ProjectsSection.scss";
import ContactMeBtn from "./common/ContactMeBtn";

const DUMMY_DATA = [
  {
    name: "design portfolio",
    image: "../assets/images/thumbnail-project-1-large",
    tech: ["html", "css"],
  },
  {
    name: "e-learning landing page",
    image: "../assets/images/thumbnail-project-2-large",
    tech: ["html", "css"],
  },
  {
    name: "todo web app",
    image: "../assets/images/thumbnail-project-3-large",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "entertainment web app",
    image: "../assets/images/thumbnail-project-4-large",
    tech: ["html", "css", "javacript"],
  },
  {
    name: "memory game",
    image: "../assets/images/thumbnail-project-5-large",
    tech: ["html", "css", "javacript"],
  },
  {
    name: "art gallery showcase",
    image: "../assets/images/thumbnail-project-6-large",
    tech: ["html", "css", "javacript"],
  },
];

const ProjectsSection = function () {
  return (
    <div className="projects">
      <div className="title">
        <h2 className="title-name">Projects</h2> <ContactMeBtn />
      </div>
    </div>
  );
};

export default ProjectsSection;
