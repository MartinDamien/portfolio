import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS_DATA = [
  {
    id: 1,
    imgURL: "/images/project/1.jpg",
    title: "Projet 1",
    description: "Description du projet 1",
    tag: ["React", "Next.js"],
  },
  {
    id: 2,
    imgURL: "/images/project/2.jpg",
    title: "Projet 2",
    description: "Description du projet 2",
    tag: ["Node.js", "Express.js"],
  },
  {
    id: 3,
    imgURL: "/images/project/3.jpg",
    title: "Projet 3",
    description: "Description du projet 3",
    tag: ["HTML5", "CSS3"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>Projets</h2>
      <div>
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.imgURL}
          />
        ))}
      </div>
    </>
  );
};
export default ProjectsSection;
