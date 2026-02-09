import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgURL, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ backgroundImage: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500">
          <Link
            href="/"
            className="h-14 w-14 relative rounded-full border-[#ABD7BE] hover:border-white"
          >
            <CodeBracketIcon className="w-10 h-10 text-[#ABD7BE] m-2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ABD7BE]">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
