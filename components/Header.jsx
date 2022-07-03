import Image from "next/image";

import useSelectSection from "../utils/useSelectSection";
import useSectionTitle from "../utils/useSectionTitle";

const Header = () => {
  const ref = useSelectSection("", true);
  const isCurrentSection = useSectionTitle("");

  return (
    <div className='h-[70vh] md:h-screen 2xl:h-[95vh] flex flex-col gap-10 md:gap-8 items-center justify-center'>
      <div className='flex items-center -mt-20'>
        <span
          className={`text-5xl md:text-[12rem] z-10 2xl:text-[16rem] ${
            isCurrentSection && "animate-wave"
          } origin-[70%_70%]`}
          ref={ref}
        >
          👋
        </span>
        <p
          data-aos='fade-right'
          data-aos-duration='600'
          className='text-3xl md:text-7xl 2xl:text-8xl'
        >
          Hello, I&apos;m Nemanja Jezdić
        </p>
      </div>
      <div
        data-aos='fade-down'
        data-aos-delay='800'
        className='flex items-center'
      >
        <img
          className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]'
          src='/jslogo.png'
          alt='js logo'
        />
        <span className='md:text-3xl 2xl:text-5xl ml-4'>
          Fullstack javascript developer
        </span>
      </div>
    </div>
  );
};

export default Header;
