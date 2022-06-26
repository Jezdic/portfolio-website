import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='mt-12'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
