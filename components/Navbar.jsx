import { useState, useContext } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import SectionContext from "../utils/SectionContext";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const menuItems = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  const { currentSection } = useContext(SectionContext);

  return (
    <nav className='w-full fixed top-0 px-1 opacity-90 z-[99] dark:bg-[#232222] bg-white '>
      <div
        data-aos='fade-down'
        data-aos-duration='800'
        className='container flex mx-auto py-5  dark:bg-[#232222] bg-white  justify-between items-center text-xl 2xl:text-2xl'
      >
        <a href='#'>
          <div className='flex items-end gap-1'>
            <img src='/jsnjlogo.jpg' alt='nj logo' width={30} height={30} />
            <span className='text-xl'>Nemanja Jezdić</span>
          </div>
        </a>
        <div className='hidden md:flex items-center gap-8'>
          {menuItems.map((item) => (
            <a
              key={item}
              className={`hover:underline hover:text-black dark:hover:text-white cursor-pointer transition-colors ${
                currentSection === ""
                  ? ""
                  : currentSection !== item &&
                    "dark:text-gray-500 text-gray-300"
              }`}
              href={`#${item}`}
            >
              {item === "skills" ? item + " and tools" : item}
            </a>
          ))}
        </div>
        {theme === "dark" ? (
          <MdOutlineLightMode
            className='cursor-pointer '
            size={35}
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdOutlineDarkMode
            className='cursor-pointer'
            size={35}
            onClick={() => setTheme("dark")}
          />
        )}
        <AiOutlineMenu
          onClick={() => setOpenMenu(true)}
          size={35}
          className='block md:hidden'
        />
      </div>
      {openMenu && (
        <div className='fixed top-0 left-0 opacity-100 w-screen h-screen bg-white dark:bg-[#232222] flex flex-col text-3xl  items-center justify-center gap-10'>
          <AiOutlineClose
            onClick={() => setOpenMenu(false)}
            size={40}
            className='absolute top-4 right-10'
          />
          <Link href='/about'>
            <a className='hover:underline'>about</a>
          </Link>
          <Link href='/'>
            <a className='hover:underline'>skills and tools</a>
          </Link>
          <Link href='/'>
            <a className='hover:underline'>projects</a>
          </Link>
          <Link href='/'>
            <a className='hover:underline'>contact</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
