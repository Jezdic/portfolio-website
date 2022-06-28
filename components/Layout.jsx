import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className='dark:bg-[#232222] bg-white'>
      <Navbar />
      <div className='mt-12'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
