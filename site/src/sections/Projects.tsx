import { myProjects } from "../constants";
import type { Project as ProjectType } from "../constants"; // 👈 type-only import
import Project from "../components/Project";


const Projects = () => {
 

  return (
    <section id="Projects" className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project: ProjectType) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
