import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgURL,
  title,
  description,
  gitURL,
  previewURL,
  tag,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-gray-700"
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500">
          <Link
            href={gitURL || "/"}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ABD7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="w-10 h-10 text-[#ABD7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewURL || "/"}
            className="h-14 w-14 border-2 relative rounded-full border-[#ABD7BE] hover:border-white group/link"
          >
            <EyeIcon className="w-10 h-10 text-[#ABD7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ABD7BE] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tag &&
            tag.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-[#ABD7BE] text-black px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
