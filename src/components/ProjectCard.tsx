import "./ProjectCard.scss";
import React, { useEffect, useState } from "react";
import Btn from "./common/Btn";

interface PropsT {
  data: { image: string; name: string; tech: string[] };
}

const ProjectCard: React.FC<PropsT> = function ({ data }) {
  const { image, name, tech } = data;

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async function (imageName: string): Promise<string> {
      const res = await import(`../assets/images/${imageName}.webp`);
      return res.default;
    };

    loadImage(image).then((url) => setImageUrl(url));
  }, [image]);

  if (!imageUrl) return null;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={`Image ${image}`} className="async-image" />
      <div className="info">
        <h4 className="name">{name}</h4>
        <div className="tech-container">
          {tech.map((value) => (
            <h5 className="tech">{value}</h5>
          ))}
        </div>
      </div>

      <div className="buttons">
        <Btn>View Project</Btn>
        <Btn>View Code</Btn>
      </div>
    </div>
  );
};

export default ProjectCard;
