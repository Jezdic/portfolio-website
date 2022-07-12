import Link from "next/link";
import Image from "next/image";

const ProjectPreview = ({
  project: { projectName, img, intro, tags, slug },
}) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div data-aos='fade-up' data-aos-offset='200'>
        <div className='p-4 flex flex-col border w-[20rem]  bg-gray-200 cursor-pointer transition hover:scale-105 dark:bg-transparent rounded-xl shadow-md hover:shadow-xl'>
          <img
            loading='lazy'
            className='w-[300px] h-[300px]'
            alt={projectName}
            src={img}
          />
          <div className='flex flex-col justify-between '>
            <h1 className='text-2xl'>{projectName}</h1>
            <p>{intro}</p>
            <div className='flex flex-wrap gap-1 mt-2 '>
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
      </div>
    </Link>
  );
};

export default ProjectPreview;
