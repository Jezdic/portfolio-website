import Image from "next/image";

import useSelectSection from "../utils/useSelectSection";

const Header = () => {
  const ref = useSelectSection("", true);

  return (
    <div className='h-[70vh] md:h-screen flex flex-col gap-10 md:gap-8 items-center justify-center'>
      <div className='flex items-center'>
        <span
          className='text-5xl md:text-[12rem] animate-wave origin-[70%_70%]'
          ref={ref}
        >
          👋
        </span>
        <p className='text-3xl md:text-7xl'>Hi, I&apos;m Nemanja Jezdić</p>
      </div>
      <div className='flex items-center'>
        <img
          className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]'
          src='/jslogo.png'
          alt='js logo'
        />
        <span className='md:text-3xl ml-4'>Fullstack javascript developer</span>
      </div>
    </div>
  );
};

export default Header;
