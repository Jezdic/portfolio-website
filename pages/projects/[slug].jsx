import Link from "next/link";
import { useState } from "react";
import { projectData, projectDetails } from "../../utils/projectData";

const Project = ({
  project: { name, intro, description, tools, details, gif, github, live },
}) => {
  const [currentSection, setCurrentSection] = useState("desc");

  const handleChangeSection = (e) => {
    if (!e.target.id) return;

    setCurrentSection(e.target.id);
  };

  return (
    <div className='fixed flex overflow-y-scroll flex-col text-2xl p-10 w-full h-full top-0 left-0 bg-white dark:bg-[#232222] z-[999]'>
      <Link href='/#projects'>
        <span className='w-40 border-2 text-center cursor-pointer transition hover:bg-gray-300 hover:shadow-sm dark:hover:bg-white dark:hover:text-black p-2 rounded-md mt-4'>
          Go back
        </span>
      </Link>
      <div className='self-center w-2/3'>
        <h1 className='text-5xl mb-4'>{name}</h1>
        <span className='block mb-8'>{intro}</span>
        <div className='mb-8'>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              className='px-4 py-2 border rounded-lg mr-4 text-white bg-purple-500 hover:bg-purple-600 cursor-pointer'
            >
              Github Repo
            </a>
          )}
          <a
            href={live}
            target='_blank'
            rel='noreferrer'
            className='px-4 py-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'
          >
            Live Demo
          </a>
          <div className='text-sm mt-2'>
            note: the server is hosted on heroku, so the website may be slower
            and some features may not work as intended. Thank you for
            uderstanding.
          </div>
        </div>
        <div className='flex flex-col'>
          <img src={`/${gif}`} className='h-[40rem]' />

          <ul
            className='py-10 px-20 flex justify-between text-3xl'
            onClick={handleChangeSection}
          >
            <li
              className={`cursor-pointer hover:text-black dark:hover:text-white ${
                currentSection !== "desc" ? "text-gray-400" : "underline"
              }`}
              id='desc'
            >
              Description
            </li>
            <li
              className={`cursor-pointer hover:text-black dark:hover:text-white ${
                currentSection !== "tools" ? "text-gray-400" : "underline"
              }`}
              id='tools'
            >
              Tools and tech stack
            </li>
            <li
              className={`cursor-pointer hover:text-black dark:hover:text-white ${
                currentSection !== "details" ? "text-gray-400" : "underline"
              }`}
              id='details'
            >
              Details
            </li>
          </ul>
          <div className='self-center px-40'>
            {currentSection === "desc" ? (
              <p className='text-center'>{description}</p>
            ) : currentSection === "tools" ? (
              <div className='flex flex-wrap gap-4 mt-2 justify-center'>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className='p-2 border-4 bg-white rounded-md dark:bg-transparent'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ) : (
              <div>
                {details.map((detail, index) => (
                  <p key={index} className='mb-4'>
                    - {detail}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectDetails[params.slug];

  return {
    props: {
      project,
    },
  };
}

export default Project;
