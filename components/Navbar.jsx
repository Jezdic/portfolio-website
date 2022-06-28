import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='w-full fixed top-0 px-1  '>
      <div className='container flex mx-auto py-5 opacity-80 dark:bg-[#121212] bg-white  justify-between items-center text-xl'>
        <div className='flex items-end gap-1'>
          <img src='/jsnjlogo.jpg' alt='nj logo' width={30} height={30} />
          <span className=''>Nemanja Jezdić</span>
        </div>
        <div className='hidden md:flex items-center gap-8'>
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
        <div className='fixed top-0 left-0 opacity-100 w-screen h-screen bg-white dark:bg-[#121212] flex flex-col text-3xl  items-center justify-center gap-10'>
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
