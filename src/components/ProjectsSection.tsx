import "./ProjectsSection.scss";
import ContactMeBtn from "./common/ContactMeBtn";
import ProjectCard from "./ProjectCard";

const DUMMY_DATA = [
  {
    name: "design portfolio",
    image: "thumbnail-project-1-large",
    tech: ["html", "css"],
  },
  {
    name: "e-learning landing page",
    image: "thumbnail-project-2-large",
    tech: ["html", "css"],
  },
  {
    name: "todo web app",
    image: "thumbnail-project-3-large",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "entertainment web app",
    image: "thumbnail-project-4-large",
    tech: ["html", "css", "javacript"],
  },
  {
    name: "memory game",
    image: "thumbnail-project-5-large",
    tech: ["html", "css", "javacript"],
  },
  {
    name: "art gallery showcase",
    image: "thumbnail-project-6-large",
    tech: ["html", "css", "javacript"],
  },
];

const ProjectsSection = function () {
  const contentJSX = DUMMY_DATA.map((v, i) => {
    return <ProjectCard data={v} key={i} />;
  });

  return (
    <div className="projects">
      <div className="title">
        <h2 className="title-name">Projects</h2> <ContactMeBtn />
      </div>

      <div className="project-cards">{contentJSX}</div>
    </div>
  );
};

export default ProjectsSection;
