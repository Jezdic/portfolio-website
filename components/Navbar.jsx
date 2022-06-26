import Link from "next/link";
import { useTheme } from "next-themes";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className='w-full fixed top-0 dark:bg-black bg-purple-500 text-white'>
      <div className='container mx-auto py-5 flex justify-between items-center'>
        <span>Nemanja Jezdic</span>
        <div className='flex items-center gap-4'>
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
          {theme === "dark" ? (
            <MdOutlineLightMode onClick={() => setTheme("light")} />
          ) : (
            <MdOutlineDarkMode onClick={() => setTheme("dark")} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
