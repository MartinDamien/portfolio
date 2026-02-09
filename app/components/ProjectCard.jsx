import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { colors } from "@/app/lib/colors";

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
        <div style={{ backgroundColor: colors.overlay.dark }} className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 flex opacity-0 group-hover:opacity-80 duration-500">
          <Link
            href={gitURL || "/"}
            style={{ borderColor: colors.border.lightGreen }}
            className="h-14 w-14 mr-2 border-2 relative rounded-full hover:border-white group/link"
          >
            <CodeBracketIcon style={{ color: colors.secondary.green }} className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewURL || "/"}
            style={{ borderColor: colors.border.lightGreen }}
            className="h-14 w-14 border-2 relative rounded-full hover:border-white group/link"
          >
            <EyeIcon style={{ color: colors.secondary.green }} className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: colors.background.darker }} className="text-white rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p style={{ color: colors.secondary.green }} className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tag &&
            tag.map((tech, index) => (
              <span
                key={index}
                style={{ backgroundColor: colors.secondary.green }}
                className="text-xs text-black px-2 py-1 rounded"
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
