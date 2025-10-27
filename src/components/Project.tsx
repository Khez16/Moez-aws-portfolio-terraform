import { useState } from "react";
import { AnimatePresence } from "motion/react";
import type { Project as ProjectType } from "../constants";
import ProjectDetails from "./ProjectDetails";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="flex-wrap items-center justify-baseline py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{project.title}</p>
          <p className="mt-2 text-neutral-400">{project.description}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {project.tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          className="flex items-center gap-1 cursor-pointer hover-animation"
          onClick={() => setShowDetails(true)}
        >
          <img src="assets/arrow-right.svg" className="w-7" />
          Read More
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <AnimatePresence>
        {showDetails && (
          <ProjectDetails
            {...project}
            onClose={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
