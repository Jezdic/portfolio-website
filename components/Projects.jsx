import { projectData } from "../projectData";
import ProjectPreview from "./ProjectPreview";

const Projects = () => {
  return (
    <div
      id='projects'
      className='scroll-mt-20 flex flex-col items-center mt-20 md:w-1/2 mx-auto'
    >
      <h1 className='text-4xl md:text-5xl underline md:mb-20'>Projects</h1>
      <div className='flex flex-wrap gap-10 justify-center'>
        {projectData.map((pr) => (
          <ProjectPreview project={pr} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
