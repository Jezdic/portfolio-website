import Image from "next/image";

const ProjectPreview = ({ project: { projectName, img, intro, tags } }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='200'
      className='p-4 flex flex-col border w-[20rem]  bg-gray-200 cursor-pointer transition hover:scale-105 dark:bg-transparent rounded-xl shadow-md hover:shadow-xl'
    >
      <Image height={300} width={200} alt={projectName} src={img} />
      <div className='flex flex-col justify-between '>
        <h1 className='text-2xl'>{projectName}</h1>
        <p>{intro}</p>
        <div className='flex flex-wrap gap-1 mt-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='p-1 border bg-white rounded-md dark:bg-transparent'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
