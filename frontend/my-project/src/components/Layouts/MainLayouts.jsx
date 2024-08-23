/* eslint-disable react/prop-types */
import { useState } from "react";
import Sidebar from "../Elements/Sidebar";
import Button from "../Elements/Button";

const MainLayouts = (props) => {
  const { children, page } = props;
  const [aktifSideBar, setAktifSideBar] = useState(true);

  const handleAktifSideBar = () => {
    setAktifSideBar(true);
  };

  const handleCloseSidebar = () => {
    setAktifSideBar(false);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/src/assets/0822.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        {aktifSideBar && <Sidebar page={page} onClose={handleCloseSidebar} />}
        <div className="flex justify-around items-center">
          <div className="mt-10">
            <h1 className="text-white text-3xl font-serif">
              Aria Persadanta Ginting
            </h1>
          </div>
          <div className="w-44">
            <Button onClick={handleAktifSideBar} variant="bg-[#020626]">
              Dashboard
            </Button>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default MainLayouts;
