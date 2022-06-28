import Image from "next/image";

const About = () => {
  return (
    <div
      className='p-10 flex flex-col items-center  scroll-mt-10 justify-center gap-6 md:gap-14'
      id='about'
    >
      <h1 className='text-4xl md:text-5xl underline '>About me</h1>
      <div className='flex flex-col-reverse md:flex-row gap-4 md:w-2/3 items-center '>
        <div className='md:w-2/3 md:text-xl'>
          <p>
            I&apos;m a 23 years old English tutor based in Belgrade, Serbia.
            Throughout my teaching career I&apos;ve met and worked with many
            programmers and IT specialists from all around the world which
            sparked my curiosity and eventually inspired me to learn web
            development.
          </p>
          <p className='mt-4'>
            I love working with React and its entire ecosystem, and I am
            currently learning NextJS.
          </p>
          <p className='mt-4'>
            My hobbies are playing table tennis, listening to music and working
            out.
          </p>
        </div>
        <div className='md:w-1/3'>
          <Image
            className='rounded-full'
            src='/me.png'
            width={300}
            height={300}
            alt='my profile picture'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
