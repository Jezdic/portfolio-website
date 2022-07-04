import Link from "next/link";
import React from "react";
import { projectData, projectDetails } from "../../utils/projectData";

const Project = ({ project }) => {
  return (
    <div className='absolute w-full h-full top-0 left-0 bg-white z-[999]'>
      <Link href='/#projects'>back</Link>
      <div>{project.intro}</div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { slug: project.slug },
  }));

  console.log({ paths });

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
