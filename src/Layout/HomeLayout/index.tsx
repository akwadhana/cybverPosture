import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex flex-col justify-between px-4 md:px-0 bg-[#11121B] ">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
