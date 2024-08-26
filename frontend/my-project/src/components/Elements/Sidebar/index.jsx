/* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { page, onClose } = props;
  const [tombolAktif, setTombolAktif] = useState(page);
  // const [closeSideBar, setCloseSideBar] = useState(true);

  const handleToggle = (tombol) => {
    setTombolAktif(tombol);
  };

  // const handleCloseSideBar = () => {
  //   setCloseSideBar(false);
  // };

  return (
    <aside className="flex flex-col bg-[#020626] w-72 h-[45rem] m-4 rounded-xl overflow-hidden fixed z-[999]">
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="mt-4 mb-8 text-center">
          <h1 className="text-2xl text-white font-serif inline-block relative">
            Administrator
          </h1>
          <span
            onClick={onClose}
            className={`text-white font-bold absolute right-8 top-2 cursor-pointer font-sans`}
          >
            X
          </span>
          <div className="h-0.5 mt-2 mx-auto w-24 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <div className="mb-4">
          <Link
            to="/dashboards"
            onClick={() => handleToggle("dashboards")}
            className={`flex flex-wrap w-56 px-3 py-3 justify-around mx-auto ${
              tombolAktif === "dashboards" ? "bg-[#20243e]" : "bg-none"
            } rounded-xl mb-4`}
          >
            <div
              className={`w-9 h-9 flex justify-center items-center rounded-xl ${
                tombolAktif === "dashboards" ? "bg-blue-600" : "bg-[#20243e]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 text-blue-600 ${
                  tombolAktif === "dashboards" ? "text-white" : "text-blue-600"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="mr-12 text-white font-bold">Dashboards</h2>
            </div>
          </Link>
          <p className="mx-auto text-xl font-bold mb-4 w-56 px-3 py-3 text-white">
            MENU
          </p>
          <Link
            to="/user"
            onClick={() => handleToggle("user")}
            className={`flex flex-wrap w-56 px-3 py-3 justify-around mx-auto ${
              tombolAktif === "user" ? "bg-[#20243e]" : "bg-none"
            } rounded-xl mb-4`}
          >
            <div
              className={`w-9 h-9 flex justify-center items-center rounded-xl ${
                tombolAktif === "user" ? "bg-blue-600" : "bg-[#20243e]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6  ${
                  tombolAktif === "user" ? "text-white" : "text-blue-600"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="mr-28 text-white font-bold">User</h2>
            </div>
          </Link>
          <Link
            to="/project"
            onClick={() => handleToggle("project")}
            className={`flex flex-wrap w-56 px-3 py-3 justify-around mx-auto ${
              tombolAktif === "project" ? "bg-[#20243e]" : "bg-none"
            } rounded-xl mb-4`}
          >
            <div
              className={`w-9 h-9 flex justify-center items-center rounded-xl ${
                tombolAktif === "project" ? "bg-blue-600" : "bg-[#20243e]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`size-6  ${
                  tombolAktif === "project" ? "text-white" : "text-blue-600"
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="mr-24 text-white font-bold">Project</h2>
            </div>
          </Link>
          <Link
            to="/skill"
            onClick={() => handleToggle("skill")}
            className={`flex flex-wrap w-56 px-3 py-3 justify-around mx-auto ${
              tombolAktif === "skill" ? "bg-[#20243e]" : "bg-none"
            } rounded-xl mb-4`}
          >
            <div
              className={`w-9 h-9 flex justify-center items-center rounded-xl ${
                tombolAktif === "skill" ? "bg-blue-600" : "bg-[#20243e]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-6  ${
                  tombolAktif === "skill" ? "text-white" : "text-blue-600"
                }`}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <path d="M9.7 17l4.6 0" />
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="mr-28 text-white font-bold">Skill</h2>
            </div>
          </Link>
          <Link
            to="/contact"
            onClick={() => handleToggle("contact")}
            className={`flex flex-wrap w-56 px-3 py-3 justify-around mx-auto ${
              tombolAktif === "contact" ? "bg-[#20243e]" : "bg-none"
            } rounded-xl mb-4`}
          >
            <div
              className={`w-9 h-9 flex justify-center items-center rounded-xl ${
                tombolAktif === "contact" ? "bg-blue-600" : "bg-[#20243e]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-6  ${
                  tombolAktif === "contact" ? "text-white" : "text-blue-600"
                }`}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                <path d="M10 16h6" />
                <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M4 8h3" />
                <path d="M4 12h3" />
                <path d="M4 16h3" />
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="mr-24 text-white font-bold">Contact</h2>
            </div>
          </Link>
        </div>
        <div
          className="mx-auto w-56 h-52 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/bg8.jpg')" }}
        >
          <h2 className="text-white text-center font-bold text-pretty text-3xl font-mono">
            Don't stop when you're tired. Stop when you're done.
          </h2>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
