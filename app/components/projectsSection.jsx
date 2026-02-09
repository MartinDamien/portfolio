import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS_DATA = [
  {
    id: 1,
    imgURL:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
    title: "Projet 1",
    description: "Description du projet 1",
    tag: ["React", "Next.js"],
    gitURL: "/",
    previewURL: "/",
  },
  {
    id: 2,
    imgURL:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
    title: "Projet 2",
    description: "Description du projet 2",
    tag: ["Node.js", "Express.js"],
    gitURL: "/",
    previewURL: "/",
  },
  {
    id: 3,
    imgURL:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
    title: "Projet 3",
    description: "Description du projet 3",
    tag: ["HTML5", "CSS3"],
    gitURL: "/",
    previewURL: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Projets
      </h2>
      <div>
        <button className="text-white flex flex-row justify-center items-center gap-2 border-2 border-[#ABD7BE] rounded-full px-4 py-2 mt-6 mx-auto hover:bg-[#ABD7BE] hover:text-black transition-colors duration-300">
          Voir tous les projets
        </button>
        <button className="text-white flex flex-row justify-center items-center gap-2 border-2 border-[#ABD7BE] rounded-full px-4 py-2 mt-6 mx-auto hover:bg-[#ABD7BE] hover:text-black transition-colors duration-300">
          projet WEB
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.imgURL}
            gitURL={project.gitURL}
            previewURL={project.previewURL}
            tag={project.tag}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
