import useSelectSection from "../utils/useSelectSection";
import useSectionTitle from "../utils/useSectionTitle";

import { projectData } from "../utils/projectData";
import ProjectPreview from "./ProjectPreview";

const Projects = () => {
  const ref = useSelectSection("projects");
  const isCurrentSection = useSectionTitle("projects");

  return (
    <div
      id='projects'
      className='scroll-mt-20 flex flex-col items-center mt-20 md:w-1/2 mx-auto mb-2'
    >
      <h1
        ref={ref}
        className={`text-4xl md:text-5xl  ${
          isCurrentSection && "underline "
        } md:mb-20`}
      >
        Projects
      </h1>
      <div className='flex flex-wrap gap-10 justify-center'>
        {projectData.map((pr) => (
          <ProjectPreview project={pr} key={pr.projectName} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
